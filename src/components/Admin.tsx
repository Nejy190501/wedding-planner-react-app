import type { FormEvent } from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { Check, X, ArrowLeft, Users, UserCheck, UserX, UtensilsCrossed } from "lucide-react";

interface RSVPEntry {
  id: string;
  name: string;
  presence: string;
  diet: string;
  language: string;
  createdAt: any;
}

export default function Admin() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [entries, setEntries] = useState<RSVPEntry[]>([]);
  const [filter, setFilter] = useState<"all" | "yes" | "no">("all");

  // Simple password protection (not for high security, just to prevent casual access)
  const ADMIN_PASSWORD = "leonie&liverance2026";

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      alert("Falsches Passwort / Mot de passe incorrect");
    }
  };

  useEffect(() => {
    if (!authenticated) return;

    const q = query(collection(db, "rsvp"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as RSVPEntry[];
      setEntries(data);
    });

    return () => unsubscribe();
  }, [authenticated]);

  const filtered = entries.filter((e) => {
    if (filter === "yes") return e.presence === "yes";
    if (filter === "no") return e.presence === "no";
    return true;
  });

  const totalYes = entries.filter((e) => e.presence === "yes").length;
  const totalNo = entries.filter((e) => e.presence === "no").length;
  const totalDiet = entries.filter((e) => e.diet && e.diet.trim() !== "").length;

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-stone-900 flex items-center justify-center px-4">
        <div className="bg-stone-800 border border-stone-700 rounded-sm p-8 max-w-md w-full">
          <h1 className="font-serif text-3xl text-white text-center mb-2">Admin</h1>
          <p className="text-stone-400 text-center text-sm mb-8">Leonie & Liverance</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe / Passwort"
              className="w-full bg-stone-700/50 border border-stone-600 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors"
              autoFocus
            />
            <button
              type="submit"
              className="w-full bg-gold-500 text-white font-medium tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-gold-400 transition-colors"
            >
              Connexion / Anmelden
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Header */}
      <header className="bg-stone-900 text-white py-6 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="font-serif text-2xl">Réponses RSVP</h1>
            <p className="text-stone-400 text-sm mt-1">Leonie & Liverance – 21 Nov 2026</p>
          </div>
          <a
            href="/"
            className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au site
          </a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-sm border border-stone-200 p-6 text-center shadow-sm">
            <Users className="w-6 h-6 text-stone-400 mx-auto mb-2" />
            <div className="font-serif text-3xl text-stone-800">{entries.length}</div>
            <div className="text-stone-500 text-xs uppercase tracking-wider mt-1">Total</div>
          </div>
          <div className="bg-white rounded-sm border border-stone-200 p-6 text-center shadow-sm">
            <UserCheck className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <div className="font-serif text-3xl text-green-600">{totalYes}</div>
            <div className="text-stone-500 text-xs uppercase tracking-wider mt-1">Présents</div>
          </div>
          <div className="bg-white rounded-sm border border-stone-200 p-6 text-center shadow-sm">
            <UserX className="w-6 h-6 text-red-400 mx-auto mb-2" />
            <div className="font-serif text-3xl text-red-500">{totalNo}</div>
            <div className="text-stone-500 text-xs uppercase tracking-wider mt-1">Absents</div>
          </div>
          <div className="bg-white rounded-sm border border-stone-200 p-6 text-center shadow-sm">
            <UtensilsCrossed className="w-6 h-6 text-amber-500 mx-auto mb-2" />
            <div className="font-serif text-3xl text-amber-600">{totalDiet}</div>
            <div className="text-stone-500 text-xs uppercase tracking-wider mt-1">Régimes</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          {(["all", "yes", "no"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-xs uppercase tracking-widest rounded-sm border transition-colors ${
                filter === f
                  ? "bg-stone-800 text-white border-stone-800"
                  : "bg-white text-stone-600 border-stone-200 hover:border-stone-400"
              }`}
            >
              {f === "all" ? `Tous (${entries.length})` : f === "yes" ? `Présents (${totalYes})` : `Absents (${totalNo})`}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-sm border border-stone-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200">
                  <th className="text-left px-6 py-4 text-xs uppercase tracking-wider text-stone-500 font-medium">Nom</th>
                  <th className="text-center px-6 py-4 text-xs uppercase tracking-wider text-stone-500 font-medium">Présence</th>
                  <th className="text-left px-6 py-4 text-xs uppercase tracking-wider text-stone-500 font-medium">Régime</th>
                  <th className="text-center px-6 py-4 text-xs uppercase tracking-wider text-stone-500 font-medium">Langue</th>
                  <th className="text-left px-6 py-4 text-xs uppercase tracking-wider text-stone-500 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-stone-400 font-light">
                      Aucune réponse pour le moment / Noch keine Antworten
                    </td>
                  </tr>
                ) : (
                  filtered.map((entry) => (
                    <tr key={entry.id} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-stone-800">{entry.name}</td>
                      <td className="px-6 py-4 text-center">
                        {entry.presence === "yes" ? (
                          <span className="inline-flex items-center gap-1 text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm">
                            <Check className="w-4 h-4" /> Oui
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-red-500 bg-red-50 px-3 py-1 rounded-full text-sm">
                            <X className="w-4 h-4" /> Non
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-stone-500 text-sm">{entry.diet || "—"}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-xs uppercase tracking-wider bg-stone-100 px-2 py-1 rounded text-stone-600">
                          {entry.language || "—"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-stone-400 text-sm">
                        {entry.createdAt?.toDate
                          ? entry.createdAt.toDate().toLocaleDateString("de-DE", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : "—"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
