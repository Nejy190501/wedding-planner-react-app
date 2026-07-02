export type Language = 'fr' | 'en' | 'de';

type Translations = Record<Language, Record<string, any>>;

export const translations: Translations = {
  fr: {
    nav: {
      events: "Le Programme",
      story: "Notre Histoire",
      timeline: "Planning",
      info: "Infos",
      faq: "FAQ",
      rsvp: "RSVP"
    },
    hero: {
      gettingMarried: "Nous nous marions",
      date: "21 Novembre 2026",
      location: "Berlin, Allemagne"
    },
    countdown: {
      title: "Le décompte a commencé",
      days: "jours",
      hours: "heures",
      minutes: "minutes",
      seconds: "secondes"
    },
    floatingRsvp: "Confirmer ma présence",
    story: {
      title: "Notre Histoire",
      chapter1: {
        title: "Notre Histoire",
        date: "",
        description: "Nous nous sommes rencontrés à Bingen lors de l'assemblée de circonscription. Ce qui a suivi, ce furent d'innombrables voyages entre Berlin et Cologne – et retour. Nous sommes reconnaissants que de merveilleuses amitiés soient nées en chemin, des amitiés qui nous ont portés tout au long de notre relation à distance. C'est cet amour et cette complicité que nous souhaitons célébrer avec vous le jour de notre mariage.\n\nNous avons hâte de vous retrouver – surtout sur la piste de danse !"
      }
    },
    events: {
      title: "Le Programme",
      addToCalendar: "+ Ajouter au calendrier",
      viewOnMap: "Voir sur la carte",
      event1: {
        title: "Discours à la Salle du Royaume",
        date: "Samedi 21 Novembre 2026",
        time: "11:00",
        location: "Salle du Royaume – Salle 3",
        address: "Naumburger Str. 37, 12057 Berlin-Neukölln",
        description: ""
      },
      event2: {
        title: "Début de la fête de mariage",
        date: "Samedi 21 Novembre 2026",
        time: "17:30",
        location: "Salle de fête",
        address: "Markgrafenstraße 67, 10969 Berlin",
        description: ""
      }
    },
    timeline: {
      title: "Planning du Jour J",
      items: [
        { title: "Discours à la Salle du Royaume", desc: "" },
        { title: "Début de la fête de mariage", desc: "Rafraîchissements et bouchées apéritives en musique." }
      ]
    },
    map: {
      title: "Les Lieux",
      subtitle: "Retrouve les lieux de la célébration à Berlin.",
      route: "Itinéraire",
      loc1: { name: "Salle du Royaume", desc: "Discours – 11:00", address: "Naumburger Str. 37, 12057 Berlin", city: "Berlin-Neukölln" },
      loc2: { name: "Salle de fête", desc: "Début de la fête – 17:30", address: "Markgrafenstraße 67, 10969 Berlin", city: "Berlin-Kreuzberg" }
    },
    info: {
      title: "Infos Pratiques",
      subtitle: "",
      items: [
        { title: "Transport", desc: "Les deux lieux – la Salle du Royaume et la salle de fête – sont facilement accessibles en transports en commun." },
        { title: "Allergies & Régimes", desc: "Merci de nous informer de toute restriction alimentaire lors de ta confirmation de présence via le formulaire RSVP." }
      ]
    },
    reco: {
      title: "Autour de Berlin",
      subtitle: "Pour profiter pleinement de ton séjour à Berlin, voici quelques-unes de nos adresses coup de cœur.",
      cats: ["À Découvrir"],
      items: [
        { name: "L'Île aux Musées", desc: "Pour une promenade culturelle" },
        { name: "East Side Gallery", desc: "Balade historique le long du mur" },
        { name: "Tiergarten", desc: "Mémorial des Témoins de Jéhovah." }
      ]
    },
    dressCode: {
      title: "Dress Code",
      subtitle: "Élégance & Cocktail chic",
      p1: "Pour notre grand jour, nous aimerions te voir sur ton 31 ! Sors tes plus belles tenues de soirée, costumes élégants et robes de cocktail.",
      p2: "Attention à la mariée :",
      p3: "Afin de lui réserver la surprise et l'exclusivité, merci d'éviter les tenues entièrement blanches.",
      p4: "N'oublie pas tes chaussures de danse !"
    },
    faq: {
      title: "Questions Fréquentes",
      q1: "Quand dois-je confirmer ma présence ?",
      a1: "Merci de confirmer ta présence via le formulaire RSVP au plus tard le 31 Juillet 2026 afin que nous puissions finaliser l'organisation de cette belle journée.",
      q2: "Que souhaitez-vous pour votre jour spécial ?",
      a2: "Nous sommes impatients de célébrer notre journée avec vous et de rassembler nos différentes cultures. Votre présence est notre plus beau cadeau. Si vous souhaitez néanmoins nous faire plaisir, nous serions ravis d'une contribution pour notre avenir commun.",
      q3: "Dans quelle langue le discours sera-t-il prononcé ?",
      a3: "Notre discours sera prononcé en français et traduit en allemand. Le premier cantique sera le cantique 154. Le texte sera affiché en allemand. Nous chanterons ensuite le cantique 159 en français. Vous pouvez volontiers vous familiariser avec les cantiques à l'avance.",
      q4: "Y aura-t-il un parking sur les lieux ?",
      a4: "Oui, le lieu à Berlin dispose d'un grand parking sécurisé et gratuit pour tous nos invités.",
      q5: "Puis-je amener un accompagnant (+1) ?",
      a5: "En raison de la capacité limitée de notre salle de mariage, nous ne pouvons accueillir que les personnes invitées. Merci de ta compréhension.",
      q6: "Quel est le dress code ?",
      a6: "Élégance & Cocktail chic ! Sors tes plus belles tenues de soirée, costumes élégants et robes de cocktail. Merci d'éviter les tenues entièrement blanches pour laisser ce privilège à la mariée. Et n'oublie pas tes chaussures de danse !"
    },
    rsvp: {
      title: "Seras-tu des nôtres ?",
      subtitle: "Merci de nous donner ta réponse avant le 31 Juillet 2026.",
      deadline: "Merci de confirmer ta présence au plus tard le 31 juillet 2026.",
      contactTitle: "Des questions sur le programme ?",
      contactSubtitle: "N'hésite pas à contacter nos responsables de fête :",
      successTitle: "Merci !",
      successDesc: "Ta réponse a bien été enregistrée.",
      form: {
        name: "Prénom & Nom",
        namePlaceholder: "Jean Dupont",
        presenceTitle: "Es-tu de la partie ?",
        yes: "Je serai là",
        no: "Je ne pourrai malheureusement pas venir",
        dietTitle: "Allergies ou régime alimentaire particulier ?",
        dietPlaceholder: "Végétarien, sans gluten...",
        btnSubmit: "Confirmer ma présence",
        btnSubmitting: "Envoi en cours..."
      }
    },
    footer: {
      quote: "\u201ELes eaux agit\u00e9es ne peuvent \u00e9teindre l\u2019amour et les fleuves ne peuvent l\u2019emporter.\u201C \u2014 Chant de Salomon 8:7a",
      madeWithLove: "Fait avec amour. Tous droits réservés."
    },
    loader: {
      date: "21 Novembre 2026"
    },
    langSelect: {
      title: "Bienvenue",
      subtitle: "Choisissez votre langue"
    }
  },
  en: {
    nav: {
      events: "Events",
      story: "Our Story",
      timeline: "Schedule",
      info: "Info",
      faq: "FAQ",
      rsvp: "RSVP"
    },
    hero: {
      gettingMarried: "We are getting married",
      date: "November 21, 2026",
      location: "Berlin, Germany"
    },
    countdown: {
      title: "The countdown begins",
      days: "days",
      hours: "hours",
      minutes: "minutes",
      seconds: "seconds"
    },
    floatingRsvp: "RSVP Now",
    story: {
      title: "Our Story",
      chapter1: {
        title: "Our Story",
        date: "",
        description: "We met in Bingen at the circuit assembly. What followed were countless trips between Berlin and Cologne – and back again. We are grateful that wonderful friendships blossomed along the way, friendships that carried us through our long-distance relationship. It is this love and bond that we want to celebrate together with you at our wedding.\n\nWe look forward to seeing each and every one of you – especially on the dance floor!"
      }
    },
    events: {
      title: "Events",
      addToCalendar: "+ Add to Calendar",
      viewOnMap: "View on Map",
      event1: {
        title: "Talk at the Kingdom Hall",
        date: "Saturday November 21, 2026",
        time: "11:00 AM",
        location: "Kingdom Hall – Hall 3",
        address: "Naumburger Str. 37, 12057 Berlin-Neukölln",
        description: ""
      },
      event2: {
        title: "Start of the Wedding Celebration",
        date: "Saturday November 21, 2026",
        time: "5:30 PM",
        location: "Celebration Venue",
        address: "Markgrafenstraße 67, 10969 Berlin",
        description: ""
      }
    },
    timeline: {
      title: "Wedding Day Schedule",
      items: [
        { title: "Talk at the Kingdom Hall", desc: "" },
        { title: "Start of the Wedding Celebration", desc: "Refreshments and appetizers with music." }
      ]
    },
    map: {
      title: "Locations",
      subtitle: "Find the celebration venues in Berlin.",
      route: "Directions",
      loc1: { name: "Kingdom Hall", desc: "Talk – 11:00 AM", address: "Naumburger Str. 37, 12057 Berlin", city: "Berlin-Neukölln" },
      loc2: { name: "Celebration Venue", desc: "Wedding Celebration – 5:30 PM", address: "Markgrafenstraße 67, 10969 Berlin", city: "Berlin-Kreuzberg" }
    },
    info: {
      title: "Practical Info",
      subtitle: "",
      items: [
        { title: "Transport", desc: "Both venues – the Kingdom Hall and the celebration location – are conveniently accessible by public transport." },
        { title: "Allergies & Diets", desc: "Please inform us of any dietary restrictions when confirming your presence via the RSVP form." }
      ]
    },
    reco: {
      title: "Around Berlin",
      subtitle: "To fully enjoy your stay in Berlin, here are some of our favorite spots.",
      cats: ["To Discover"],
      items: [
        { name: "Museum Island", desc: "For a cultural stroll" },
        { name: "East Side Gallery", desc: "Historic walk along the wall" },
        { name: "Tiergarten", desc: "Memorial to the Jehovah's Witnesses." }
      ]
    },
    dressCode: {
      title: "Dress Code",
      subtitle: "Elegance & Cocktail Chic",
      p1: "For our big day, we would love to see you dressed up! Bring out your best evening wear, elegant suits, and cocktail dresses.",
      p2: "Attention regarding the bride:",
      p3: "To save the surprise and exclusivity for her, please avoid wearing all-white outfits.",
      p4: "Don't forget your dancing shoes!"
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "When should I RSVP?",
      a1: "Please confirm your presence via the RSVP form no later than July 31, 2026, so we can finalize the organization of this beautiful day.",
      q2: "What do you wish for on your special day?",
      a2: "We are looking forward to celebrating our day together with you and bringing our different cultures together. Your presence is the greatest gift for us. If you would still like to make us happy, we would appreciate a contribution to our shared future.",
      q3: "In which language will the talk be given?",
      a3: "Our talk will be given in French and translated into German. The first song will be song 154. The text will be displayed in German. We will then sing song 159 in French. You are welcome to familiarize yourself with the songs in advance.",
      q4: "Will there be parking at the venues?",
      a4: "Yes, the venue in Berlin has a large, free, secure parking lot for all our guests.",
      q5: "Can I bring a +1?",
      a5: "Due to the limited capacity of our wedding hall, we can only accommodate the invited persons. Thank you for your understanding.",
      q6: "What is the dress code?",
      a6: "Elegance & Cocktail Chic! Bring out your best evening wear, elegant suits, and cocktail dresses. Please avoid wearing all-white outfits to let the bride have that privilege. And don't forget your dancing shoes!"
    },
    rsvp: {
      title: "Will you be there?",
      subtitle: "Please give us your answer before July 31, 2026.",
      deadline: "Please confirm your presence by July 31, 2026 at the latest.",
      contactTitle: "Questions about the schedule?",
      contactSubtitle: "Feel free to reach out to our event coordinators:",
      successTitle: "Thank you!",
      successDesc: "Your answer has been saved.",
      form: {
        name: "First & Last Name",
        namePlaceholder: "John Doe",
        presenceTitle: "Will you be there?",
        yes: "I will be there",
        no: "I unfortunately cannot come",
        dietTitle: "Allergies or dietary restrictions?",
        dietPlaceholder: "Vegetarian, gluten-free...",
        btnSubmit: "Confirm my presence",
        btnSubmitting: "Sending..."
      }
    },
    footer: {
      quote: "\u201CSurging waters cannot extinguish love, nor can rivers wash it away.\u201D \u2014 Song of Solomon 8:7a",
      madeWithLove: "Made with love. All rights reserved."
    },
    loader: {
      date: "November 21, 2026"
    },
    langSelect: {
      title: "Welcome",
      subtitle: "Choose your language"
    }
  },
  de: {
    nav: {
      events: "Programm",
      story: "Unsere Geschichte",
      timeline: "Zeitplan",
      info: "Infos",
      faq: "FAQ",
      rsvp: "Zusagen"
    },
    hero: {
      gettingMarried: "Wir heiraten",
      date: "21. November 2026",
      location: "Berlin, Deutschland"
    },
    countdown: {
      title: "Der Countdown läuft",
      days: "Tage",
      hours: "Stunden",
      minutes: "Minuten",
      seconds: "Sekunden"
    },
    floatingRsvp: "Jetzt zusagen",
    story: {
      title: "Unsere Geschichte",
      chapter1: {
        title: "Unsere Geschichte",
        date: "",
        description: "Kennengelernt haben wir uns in Bingen auf dem Kreiskongress. Was darauf folgte, waren unzählige Reisen zwischen Berlin und Köln – und wieder zurück. Wir sind dankbar, dass auf diesem Weg wunderbare Freundschaften entstanden sind, die uns durch unsere Fernbeziehung getragen haben. Genau diese Liebe und Verbundenheit möchten wir nun gemeinsam mit euch auf unserer Hochzeit feiern.\n\nWir freuen uns auf jeden Einzelnen von euch – besonders auf der Tanzfläche!"
      }
    },
    events: {
      title: "Programm",
      addToCalendar: "+ Zum Kalender hinzufügen",
      viewOnMap: "Auf Karte ansehen",
      event1: {
        title: "Ansprache im Königreichssaal",
        date: "Samstag, 21. November 2026",
        time: "11:00 Uhr",
        location: "Königreichssaal – Saal 3",
        address: "Naumburger Str. 37, 12057 Berlin-Neukölln",
        description: ""
      },
      event2: {
        title: "Beginn der Hochzeitsfeier",
        date: "Samstag, 21. November 2026",
        time: "17:30 Uhr",
        location: "Festsaal",
        address: "Markgrafenstraße 67, 10969 Berlin",
        description: ""
      }
    },
    timeline: {
      title: "Zeitplan der Hochzeit",
      items: [
        { title: "Ansprache im Königreichssaal", desc: "" },
        { title: "Beginn der Hochzeitsfeier", desc: "Erfrischungen und Häppchen mit Musik." }
      ]
    },
    map: {
      title: "Die Orte",
      subtitle: "Hier findest du die Veranstaltungsorte unserer Feier in Berlin.",
      route: "Wegbeschreibung",
      loc1: { name: "Königreichssaal", desc: "Ansprache – 11:00 Uhr", address: "Naumburger Str. 37, 12057 Berlin", city: "Berlin-Neukölln" },
      loc2: { name: "Festsaal", desc: "Hochzeitsfeier – 17:30 Uhr", address: "Markgrafenstraße 67, 10969 Berlin", city: "Berlin-Kreuzberg" }
    },
    info: {
      title: "Praktische Infos",
      subtitle: "",
      items: [
        { title: "Transport", desc: "Beide Veranstaltungsorte – der Königreichssaal und die Feierlocation – sind bequem mit öffentlichen Verkehrsmitteln erreichbar." },
        { title: "Allergien & Ernährung", desc: "Bitte teile uns bei der Bestätigung deiner Anwesenheit über das RSVP-Formular alle Ernährungseinschränkungen mit." }
      ]
    },
    reco: {
      title: "Rund um Berlin",
      subtitle: "Um deinen Aufenthalt in Berlin in vollen Zügen zu genießen, hier einige unserer Lieblingsorte.",
      cats: ["Zu Entdecken"],
      items: [
        { name: "Museumsinsel", desc: "Für einen kulturellen Spaziergang" },
        { name: "East Side Gallery", desc: "Historischer Spaziergang entlang der Mauer" },
        { name: "Tiergarten", desc: "Mahnmal der Zeugen Jehovah." }
      ]
    },
    dressCode: {
      title: "Dress Code",
      subtitle: "Eleganz & Cocktail Chic",
      p1: "An unserem großen Tag würden wir dich gerne in Schale geworfen sehen! Hol deine beste Abendgarderobe, elegante Anzüge und Cocktailkleider hervor.",
      p2: "Achtung wegen der Braut:",
      p3: "Um ihr die Überraschung und Exklusivität zu bewahren, bitten wir dich, komplett weiße Outfits zu vermeiden.",
      p4: "Vergiss deine Tanzschuhe nicht!"
    },
    faq: {
      title: "Häufig gestellte Fragen",
      q1: "Bis wann soll ich zu-/absagen?",
      a1: "Bitte bestätige deine Anwesenheit über das RSVP-Formular spätestens bis zum 31. Juli 2026, damit wir die Organisation dieses schönen Tages abschließen können.",
      q2: "Was wünscht ihr euch für euren besonderen Tag?",
      a2: "Wir freuen uns darauf unseren Tag gemeinsam mit euch zu feiern und unsere unterschiedlichen Kulturen miteinander zu verbinden. Eure Anwesenheit ist für uns das schönste Geschenk. Wenn ihr uns darüber hinaus eine Freude bereiten möchtet, freuen wir uns über einen Beitrag zu unserer gemeinsamen Zukunft.",
      q3: "In welcher Sprache wird die Ansprache gehalten?",
      a3: "Unsere Ansprache wird auf Französisch gehalten und ins Deutsche übersetzt. Das erste Lied wird Lied 154 sein. Der Text wird auf Deutsch angezeigt. Lied 159 werden wir wiederum auf Französisch singen. Gerne könnt ihr euch bereits vorab mit den Liedern vertraut machen.",
      q4: "Wird es Parkplätze am Veranstaltungsort geben?",
      a4: "Ja, der Veranstaltungsort in Berlin verfügt über einen großen, kostenlosen, sicheren Parkplatz für alle unsere Gäste.",
      q5: "Kann ich eine begleitende Person mitbringen?",
      a5: "Aufgrund der begrenzten Kapazität unseres Hochzeitssaals können wir nur die eingeladenen Personen aufnehmen. Vielen Dank für dein Verständnis.",
      q6: "Was ist der Dress Code?",
      a6: "Eleganz & Cocktail Chic! Hol deine beste Abendgarderobe, elegante Anzüge und Cocktailkleider hervor. Bitte vermeide komplett weiße Outfits, damit die Braut dieses Privileg behält. Und vergiss deine Tanzschuhe nicht!"
    },
    rsvp: {
      title: "Bist du dabei?",
      subtitle: "Bitte gib uns bis zum 31. Juli 2026 Bescheid.",
      deadline: "Bitte bestätige deine Anwesenheit bis spätestens zum 31. Juli 2026.",
      contactTitle: "Fragen zum Programm?",
      contactSubtitle: "Bei Fragen bezüglich des Programms wende dich gerne an unsere Festleiter:",
      successTitle: "Vielen Dank!",
      successDesc: "Deine Antwort wurde gespeichert.",
      form: {
        name: "Vor- & Nachname",
        namePlaceholder: "Max Mustermann",
        presenceTitle: "Bist du dabei?",
        yes: "Ich werde da sein",
        no: "Ich kann leider nicht kommen",
        dietTitle: "Allergien oder Ernährungsbesonderheiten?",
        dietPlaceholder: "Vegetarisch, glutenfrei...",
        btnSubmit: "Meine Anwesenheit bestätigen",
        btnSubmitting: "Wird gesendet..."
      }
    },
    footer: {
      quote: "\u201EWasserfluten können die Liebe nicht auslöschen noch können Flüsse sie wegschwemmen.\u201C Hoheslied 8:7a",
      madeWithLove: "Mit Liebe gemacht. Alle Rechte vorbehalten."
    },
    loader: {
      date: "21. November 2026"
    },
    langSelect: {
      title: "Willkommen",
      subtitle: "Wähle deine Sprache"
    }
  }
};
