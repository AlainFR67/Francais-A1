"use strict";

const LESSONS = [
  {
    id: "se-presenter",
    title: "Se présenter",
    emoji: "👋",
    theory: [
      {
        title: "Les salutations",
        body: "Utilise « bonjour » le jour, « bonsoir » le soir et « salut » seulement avec tes amis. Pour dire au revoir : « au revoir », « à bientôt », « à demain ».",
      },
      {
        title: "Les questions de base",
        list: [
          "Comment tu t'appelles ? → Je m'appelle…",
          "Comment allez-vous ? → Je vais bien, merci.",
          "Tu es d'où ? → Je suis de Paris.",
          "Quel âge as-tu ? → J'ai 20 ans.",
        ],
      },
      {
        title: "Se présenter",
        list: [
          "Je m'appelle Marie. J'ai 22 ans.",
          "Je suis français / française.",
          "J'habite à Lyon.",
          "Je suis étudiant / étudiante.",
        ],
      },
    ],
    vocab: [
      { fr: "bonjour", def: "salutation utilisée le jour" },
      { fr: "bonsoir", def: "salutation utilisée le soir" },
      { fr: "salut", def: "bonjour informel, entre amis" },
      { fr: "au revoir", def: "pour dire adieu" },
      { fr: "à bientôt", def: "pour dire que l'on va se revoir" },
      { fr: "merci", def: "pour exprimer la gratitude" },
      { fr: "s'il vous plaît", def: "pour demander poliment" },
      { fr: "pardon", def: "pour s'excuser ou passer" },
      { fr: "oui / non", def: "réponse affirmative / négative" },
      { fr: "enchanté(e)", def: "ravi de faire ta connaissance" },
    ],
    quiz: [
      {
        q: "Le soir, pour saluer, on dit :",
        choices: ["bonjour", "bonsoir", "merci"],
        answer: 1,
      },
      {
        q: "« Comment tu t'appelles ? » … « ___ Marie. »",
        choices: ["Je suis", "J'ai", "Je m'appelle"],
        answer: 2,
      },
      {
        q: "Quelle question demande l'âge ?",
        choices: ["Tu es d'où ?", "Quel âge as-tu ?", "Comment allez-vous ?"],
        answer: 1,
      },
      {
        q: "Pour répondre positivement, on dit :",
        choices: ["oui", "non", "pardon"],
        answer: 0,
      },
      {
        q: "« Enchanté(e) » s'utilise quand on :",
        choices: ["dit au revoir", "rencontre quelqu'un", "s'excuse"],
        answer: 1,
      },
      {
        q: "« J'habite à Paris. » répond à la question :",
        choices: ["Tu es d'où ?", "Quel âge as-tu ?", "Comment tu t'appelles ?"],
        answer: 0,
      },
      {
        q: "Pour remercier, on dit :",
        choices: ["pardon", "au revoir", "merci"],
        answer: 2,
      },
      {
        q: "« Salut » est une salutation…",
        choices: ["formelle", "informelle", "écrite"],
        answer: 1,
      },
    ],
  },
  {
    id: "articles",
    title: "Les articles",
    emoji: "📚",
    theory: [
      {
        title: "Articles définis : le, la, l', les",
        body: "Ils désignent quelque chose de précis. (« le » masculin, « la » féminin, « l' » devant une voyelle, « les » au pluriel.)",
      },
      {
        title: "Articles indéfinis : un, une, des",
        body: "Ils désignent quelque chose d'imprécis. (« un » masculin, « une » féminin, « des » au pluriel.)",
      },
      {
        title: "Exemples",
        list: [
          "Le livre est sur la table.",
          "J'ai une voiture et un vélo.",
          "L'ami de Marie s'appelle Paul.",
          "Les enfants jouent au parc.",
        ],
      },
    ],
    vocab: [
      { fr: "le / la / les", def: "articles définis (le livre, la table, les livres)" },
      { fr: "un / une / des", def: "articles indéfinis (un chat, une souris, des chats)" },
      { fr: "mon / ma / mes", def: "possessifs au singulier (mon frère, ma sœur)" },
      { fr: "ce / cette / ces", def: "déterminants pour montrer (ce stylo, cette gomme)" },
      { fr: "une table", def: "meuble avec plateau et pieds" },
      { fr: "un livre", def: "objet que l'on lit" },
      { fr: "un animal", def: "être vivant non humain" },
      { fr: "une école", def: "lieu où l'on apprend" },
    ],
    quiz: [
      {
        q: "___ chat dort sur le canapé. (le chat)",
        choices: ["Le", "La", "Les"],
        answer: 0,
      },
      {
        q: "J'ai ___ idée ! (une idée)",
        choices: ["un", "une", "des"],
        answer: 1,
      },
      {
        q: "Il y a ___ fleurs dans le jardin. (pluriel)",
        choices: ["la", "une", "des"],
        answer: 2,
      },
      {
        q: "___ amie de Paul s'appelle Léa. (devant une voyelle)",
        choices: ["Le", "L'", "La"],
        answer: 1,
      },
      {
        q: "C'est ___ voiture. (féminin, possessif)",
        choices: ["mon", "ma", "mes"],
        answer: 1,
      },
      {
        q: "___ école est près de chez moi. (féminin singulier, démonstratif)",
        choices: ["Cet", "Cette", "Ces"],
        answer: 1,
      },
      {
        q: "Je regarde ___ télévision. (article défini)",
        choices: ["la", "le", "un"],
        answer: 0,
      },
      {
        q: "Nous achetons ___ pommes. (pluriel indéfini)",
        choices: ["une", "le", "des"],
        answer: 2,
      },
    ],
  },
  {
    id: "etre-avoir",
    genVerbs: ["être", "avoir"],
    title: "Être et avoir",
    emoji: "✅",
    theory: [
      {
        title: "Le verbe être",
        body: "Je suis / tu es / il, elle est / nous sommes / vous êtes / ils, elles sont.",
      },
      {
        title: "Le verbe avoir",
        body: "J'ai / tu as / il, elle a / nous avons / vous avez / ils, elles ont.",
      },
      {
        title: "Attention aux âges en français",
        body: "Pour l'âge, on utilise avoir : « J'ai 25 ans » (et non « je suis 25 ans »). Pour l'état et la nationalité, on utilise être : « Je suis fatigué », « Je suis espagnol. »",
      },
    ],
    vocab: [
      { fr: "je suis", def: "conjugaison de être à la 1ʳᵉ personne" },
      { fr: "nous sommes", def: "conjugaison de être à la 1ʳᵉ personne du pluriel" },
      { fr: "vous êtes", def: "conjugaison de être à la 2ᵉ personne du pluriel" },
      { fr: "j'ai", def: "conjugaison de avoir à la 1ʳᵉ personne" },
      { fr: "nous avons", def: "conjugaison de avoir à la 1ʳᵉ personne du pluriel" },
      { fr: "ils ont", def: "conjugaison de avoir à la 3ᵉ personne du pluriel" },
    ],
    quiz: [
      {
        q: "Je ___ étudiant.",
        choices: ["a", "sus", "suis"],
        answer: 2,
      },
      {
        q: "Nous ___ deux chats.",
        choices: ["avons", "sommes", "avez"],
        answer: 0,
      },
      {
        q: "Vous ___ très gentils.",
        choices: ["êtes", "avons", "a"],
        answer: 0,
      },
      {
        q: "Il ___ 15 ans.",
        choices: ["est", "a", "as"],
        answer: 1,
      },
      {
        q: "Marie et Paul ___ fatigués.",
        choices: ["ont", "sont", "a"],
        answer: 1,
      },
      {
        q: "Pour dire que tu as faim, tu dis :",
        choices: ["Je suis faim.", "J'ai faim.", "J'a faim."],
        answer: 1,
      },
      {
        q: "Tu ___ mon meilleur ami.",
        choices: ["es", "as", "avait"],
        answer: 0,
      },
      {
        q: "Elles ___ françaises.",
        choices: ["ont", "est", "sont"],
        answer: 2,
      },
    ],
  },
  {
    id: "verbes-er",
    genVerbs: ["parler", "habiter", "aimer", "jouer", "écouter", "étudier", "travailler", "manger"],
    title: "Les verbes du 1er groupe (-er) au présent",
    emoji: "✏️",
    theory: [
      {
        title: "Le modèle « parler »",
        body: "je parle / tu parles / il, elle parle / nous parlons / vous parlez / ils, elles parlent.",
      },
      {
        title: "Comment conjuguer ?",
        body: "On enlève « -er » de l'infinitif et on ajoute les terminaisons : -e, -es, -e, -ons, -ez, -ent.",
      },
      {
        title: "Verbes du même type",
        list: [
          "aimer → j'aime le chocolat",
          "habiter → j'habite à Marseille",
          "travailler → nous travaillons",
          "jouer → ils jouent au foot",
          "regarder → vous regardez un film",
        ],
      },
    ],
    vocab: [
      { fr: "parler", def: "dire quelque chose à quelqu'un" },
      { fr: "aimer", def: "apprécier, avoir de l'affection" },
      { fr: "habiter", def: "vivre à un endroit" },
      { fr: "travailler", def: "exercer un emploi" },
      { fr: "étudier", def: "apprendre dans un cadre scolaire" },
      { fr: "jouer", def: "faire un jeu ou un sport" },
      { fr: "manger", def: "prendre un repas" },
      { fr: "écouter", def: "prêter l'oreille à des sons" },
    ],
    quiz: [
      {
        q: "J'___ à Paris. (habiter)",
        choices: ["habite", "habites", "habitent"],
        answer: 0,
      },
      {
        q: "Nous ___ le français. (étudier)",
        choices: ["étudiez", "étudions", "étudie"],
        answer: 1,
      },
      {
        q: "Vous ___ au tennis. (jouer)",
        choices: ["jouez", "jouons", "jouent"],
        answer: 0,
      },
      {
        q: "Ils ___ de la musique. (écouter)",
        choices: ["écoutent", "écoutes", "écoutez"],
        answer: 0,
      },
      {
        q: "Marie ___ bien. (travailler)",
        choices: ["travailles", "travaille", "travaillent"],
        answer: 1,
      },
      {
        q: "Terminaison de « nous » pour les verbes en -er :",
        choices: ["-ez", "-ons", "-ent"],
        answer: 1,
      },
      {
        q: "Terminaison de « ils » pour les verbes en -er :",
        choices: ["-ent", "-ons", "-e"],
        answer: 0,
      },
      {
        q: "Tu ___ le chocolat ? (aimer)",
        choices: ["aimes", "aime", "aiment"],
        answer: 0,
      },
    ],
  },
  {
    id: "verbes-ir",
    genVerbs: ["finir", "choisir", "grandir", "réfléchir", "réussir", "obéir"],
    title: "Les verbes du 2ème groupe (-ir) au présent",
    emoji: "🚀",
    theory: [
      {
        title: "Le modèle « finir »",
        body: "Je finis / tu finis / il, elle finit / nous finissons / vous finissez / ils, elles finissent.",
      },
      {
        title: "Comment conjuguer ?",
        body: "On enlève « -ir » de l'infinitif et on ajoute les terminaisons : -is, -is, -it, -issons, -issez, -issent.",
      },
      {
        title: "Attention !",
        body: "Tous les verbes en -ir ne sont pas du 2e groupe : partir, venir, sortir et dormir sont du 3e groupe. Un vrai verbe du 2e groupe fait « -issons » avec « nous » (nous finissons, nous choisissons).",
      },
      {
        title: "Verbes du même type",
        list: [
          "choisir → je choisis",
          "grandir → nous grandissons",
          "réfléchir → vous réfléchissez",
          "obéir → ils obéissent",
          "réussir → tu réussis",
        ],
      },
    ],
    vocab: [
      { fr: "finir", def: "arriver à la fin de quelque chose" },
      { fr: "choisir", def: "prendre une décision, sélectionner" },
      { fr: "grandir", def: "devenir plus grand" },
      { fr: "réfléchir", def: "penser avant de décider" },
      { fr: "obéir", def: "faire ce que quelqu'un demande" },
      { fr: "réussir", def: "obtenir un bon résultat" },
      { fr: "nous finissons", def: "conjugaison de finir à la 1re personne du pluriel" },
      { fr: "vous finissez", def: "conjugaison de finir à la 2e personne du pluriel" },
    ],
    quiz: [
      {
        q: "Je ___ mon dessert. (finir)",
        choices: ["finis", "finit", "finissez"],
        answer: 0,
      },
      {
        q: "Nous ___ la leçon. (finir)",
        choices: ["finissons", "finissez", "finissent"],
        answer: 0,
      },
      {
        q: "Vous ___ une pizza. (choisir)",
        choices: ["choisis", "choisissez", "choisissent"],
        answer: 1,
      },
      {
        q: "Les enfants ___ vite. (grandir)",
        choices: ["grandit", "grandissez", "grandissent"],
        answer: 2,
      },
      {
        q: "Tu ___ avant de répondre. (réfléchir)",
        choices: ["réfléchis", "réfléchit", "réfléchissez"],
        answer: 0,
      },
      {
        q: "Terminaison de « nous » pour un verbe du 2e groupe :",
        choices: ["-issons", "-issez", "-issent"],
        answer: 0,
      },
      {
        q: "Quel verbe n'est PAS du 2e groupe ?",
        choices: ["choisir", "réussir", "partir"],
        answer: 2,
      },
      {
        q: "Marie ___ ses devoirs. (finir)",
        choices: ["finis", "finit", "finissent"],
        answer: 1,
      },
    ],
  },
  {
    id: "verbes-3e-groupe",
    title: "Les verbes du 3ème groupe (tous les autres) au présent",
    emoji: "⚡",
    genVerbs: ["aller", "faire", "venir"],
    theory: [
      {
        title: "Le verbe aller",
        body: "Je vais / tu vas / il, elle va / nous allons / vous allez / ils, elles vont.",
      },
      {
        title: "Le verbe faire",
        body: "Je fais / tu fais / il, elle fait / nous faisons / vous faites / ils, elles font.",
      },
      {
        title: "Le verbe venir",
        body: "Je viens / tu viens / il, elle vient / nous venons / vous venez / ils, elles viennent.",
      },
      {
        title: "Les autres verbes usuels",
        list: [
          "pouvoir → je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent",
          "vouloir → je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent",
          "partir → je pars, tu pars, il part, nous partons, vous partez, ils partent",
        ],
      },
      {
        title: "À retenir",
        body: "Les verbes du 3ème groupe sont irréguliers : il faut mémoriser chaque modèle (aller, faire, venir…). Beaucoup font « -s, -s, -t » au singulier, mais les formes de « nous » et « vous » ressemblent souvent à l'infinitif (nous ven-ons, vous ven-ez).",
      },
    ],
    vocab: [
      { fr: "aller", def: "se déplacer vers un lieu" },
      { fr: "faire", def: "effectuer une action" },
      { fr: "venir", def: "arriver depuis un lieu" },
      { fr: "partir", def: "quitter un lieu" },
      { fr: "pouvoir", def: "avoir la capacité ou la permission de" },
      { fr: "vouloir", def: "désirer quelque chose" },
      { fr: "nous allons", def: "conjugaison de aller avec « nous »" },
      { fr: "vous faites", def: "conjugaison de faire avec « vous »" },
    ],
    quiz: [
      {
        q: "Je ___ à l'école. (aller)",
        choices: ["va", "vais", "vas"],
        answer: 1,
      },
      {
        q: "Vous ___ vos devoirs. (faire)",
        choices: ["faites", "faisons", "font"],
        answer: 0,
      },
      {
        q: "Ils ___ au cinéma. (aller)",
        choices: ["allons", "vont", "vas"],
        answer: 1,
      },
      {
        q: "Tu ___ d'où ? (venir)",
        choices: ["viens", "vient", "venez"],
        answer: 0,
      },
      {
        q: "J'___ rester à la maison. (vouloir)",
        choices: ["veux", "veut", "voulons"],
        answer: 0,
      },
      {
        q: "Elle ___ aller à Lyon. (pouvoir)",
        choices: ["peux", "pouvons", "peut"],
        answer: 2,
      },
      {
        q: "Nous ___ à huit heures. (partir)",
        choices: ["pars", "partons", "partent"],
        answer: 1,
      },
      {
        q: "On ___ du vélo. (faire)",
        choices: ["fait", "fais", "faites"],
        answer: 0,
      },
    ],
  },
  {
    id: "trois-groupes",
    id: "trois-groupes",
    genVerbs: ["aller", "faire", "venir"],
    genGroups: true,
    title: "Les 3 groupes de verbes au présent",
    emoji: "🎯",
    theory: [
      {
        title: "1er groupe : les verbes en -er",
        body: "C'est le plus grand groupe : parler, manger, habiter, aimer… Ils sont tous réguliers (parl-ons, mang-ons).",
      },
      {
        title: "2e groupe : les verbes en -ir type « finir »",
        body: "finir, choisir, grandir… Terminaisons : -is, -is, -it, -issons, -issez, -issent.",
      },
      {
        title: "3e groupe : les verbes irréguliers",
        body: "aller, faire, venir, partir, pouvoir, vouloir… Il faut les apprendre par cœur. Aller : je vais, tu vas, il va, nous allons, vous allez, ils vont. Faire : je fais, tu fais, il fait, nous faisons, vous faites, ils font.",
      },
      {
        title: "Comment reconnaître le groupe ?",
        list: [
          "L'infinitif en -er → 1er groupe",
          "L'infinitif en -ir et « nous » en -issons → 2e groupe",
          "Tous les autres (-re, -ir comme partir, -ir comme venir) → 3e groupe",
        ],
      },
    ],
    vocab: [
      { fr: "aller", def: "se déplacer vers un lieu (3e groupe)" },
      { fr: "faire", def: "effectuer une action (3e groupe)" },
      { fr: "venir", def: "arriver depuis un lieu (3e groupe)" },
      { fr: "partir", def: "quitter un lieu (3e groupe)" },
      { fr: "pouvoir", def: "avoir la capacité de (3e groupe)" },
      { fr: "vouloir", def: "désirer quelque chose (3e groupe)" },
      { fr: "nous faisons", def: "conjugaison de faire avec « nous »" },
      { fr: "vous allez", def: "conjugaison de aller avec « vous »" },
    ],
    quiz: [
      {
        q: "« Parler » appartient au :",
        choices: ["1er groupe", "2e groupe", "3e groupe"],
        answer: 0,
      },
      {
        q: "« Finir » appartient au :",
        choices: ["1er groupe", "2e groupe", "3e groupe"],
        answer: 1,
      },
      {
        q: "« Aller » appartient au :",
        choices: ["1er groupe", "2e groupe", "3e groupe"],
        answer: 2,
      },
      {
        q: "Je ___ à l'école. (aller)",
        choices: ["va", "vais", "vas"],
        answer: 1,
      },
      {
        q: "Nous ___ du vélo. (faire)",
        choices: ["faisons", "faites", "font"],
        answer: 0,
      },
      {
        q: "Ils ___ au cinéma. (aller)",
        choices: ["vont", "allons", "vont être"],
        answer: 0,
      },
      {
        q: "Vous ___ le ménage. (faire)",
        choices: ["faisons", "font", "faites"],
        answer: 2,
      },
      {
        q: "Un verbe du 2e groupe fait avec « nous » :",
        choices: ["-ons", "-issons", "-ez"],
        answer: 1,
      },
    ],
  },
  {
    id: "nombres",
    title: "Les nombres et l'heure",
    emoji: "🔢",
    theory: [
      {
        title: "De 0 à 20",
        body: "zéro, un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix, onze, douze, treize, quatorze, quinze, seize, dix-sept, dix-huit, dix-neuf, vingt.",
      },
      {
        title: "Les dizaines",
        body: "vingt (20), trente (30), quarante (40), cinquante (50), soixante (60), soixante-dix (70), quatre-vingts (80), quatre-vingt-dix (90), cent (100).",
      },
      {
        title: "Demander et dire l'heure",
        list: [
          "Quelle heure est-il ?",
          "Il est huit heures 15.",
          "Il est deux heures et quart.",
          "Il est midi (12h) / minuit (0h).",
        ],
      },
    ],
    vocab: [
      { fr: "vingt", def: "20" },
      { fr: "trente", def: "30" },
      { fr: "quarante", def: "40" },
      { fr: "cinquante", def: "50" },
      { fr: "soixante", def: "60" },
      { fr: "quatre-vingts", def: "80" },
      { fr: "cent", def: "100" },
      { fr: "midi", def: "12 heures du jour" },
      { fr: "minuit", def: "0 heure de la nuit" },
    ],
    quiz: [
      {
        q: "Comment écrit-on « 70 » ?",
        choices: ["septante", "soixante-dix", "soixante et onze"],
        answer: 1,
      },
      {
        q: "Comment écrit-on « 80 » ?",
        choices: ["quatre-vingts", "octante", "huitante"],
        answer: 0,
      },
      {
        q: "Comment écrit-on « 50 » ?",
        choices: ["cinqante", "cinquante", "sante"],
        answer: 1,
      },
      {
        q: "Après « 15 », on passe à :",
        choices: ["seize", "sept", "douze"],
        answer: 0,
      },
      {
        q: "« Il est deux heures et quart » signifie :",
        choices: ["2h45", "14h20", "2h15"],
        answer: 2,
      },
      {
        q: "A midi il est :",
        choices: ["minuit", "12h", "0h"],
        answer: 1,
      },
      {
        q: "Combien s'écrit « neuf » ?",
        choices: ["9", "4", "8"],
        answer: 0,
      },
      {
        q: "Comment écrit-on « 30 » ?",
        choices: ["trantes", "trentes", "trente"],
        answer: 2,
      },
    ],
  },
  {
    id: "vie-quotidienne",
    title: "La vie quotidienne",
    emoji: "🏠",
    theory: [
      {
        title: "Les jours",
        body: "Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche.",
      },
      {
        title: "Les mois",
        body: "Janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre.",
      },
      {
        title: "À la maison et dans la ville",
        list: [
          "La cuisine, la chambre, le salon, la salle de bains.",
          "Le magasin, le café, le restaurant, la gare.",
          "Je vais au travail en bus.",
        ],
      },
    ],
    vocab: [
      { fr: "lundi", def: "premier jour de la semaine" },
      { fr: "vendredi", def: "cinquième jour de la semaine" },
      { fr: "dimanche", def: "dernier jour de la semaine" },
      { fr: "la cuisine", def: "pièce où l'on cuisine" },
      { fr: "la chambre", def: "pièce où l'on dort" },
      { fr: "le café", def: "lieu où l'on boit des boissons" },
      { fr: "la gare", def: "lieu où l'on prend le train" },
      { fr: "le magasin", def: "lieu où l'on achète des choses" },
    ],
    quiz: [
      {
        q: "Quel jour vient après mardi ?",
        choices: ["jeudi", "mercredi", "lundi"],
        answer: 1,
      },
      {
        q: "Quel est le premier jour de la semaine ?",
        choices: ["dimanche", "samedi", "lundi"],
        answer: 2,
      },
      {
        q: "Dans quelle pièce dort-on ?",
        choices: ["dans le salon", "dans la salle de bains", "dans la chambre"],
        answer: 2,
      },
      {
        q: "Où prend-on le train ?",
        choices: ["À la gare", "Au café", "À l'école"],
        answer: 0,
      },
      {
        q: "Quel mois est en été ?",
        choices: ["janvier", "juillet", "octobre"],
        answer: 1,
      },
      {
        q: "Où achète-t-on du pain ?",
        choices: ["À la boulangerie", "À la pharmacie", "Au cinéma"],
        answer: 0,
      },
      {
        q: "Le week-end, on a cours en général :",
        choices: ["vrai", "faux", "on ne sait pas"],
        answer: 1,
      },
      {
        q: "Nous allons au travail ___ bus.",
        choices: ["en", "à", "de"],
        answer: 0,
      },
    ],
  },
  {
    id: "culture-france",
    title: "La France : culture et citoyenneté",
    emoji: "🏛️",
    theory: [
      {
        title: "La devise de la République",
        body: "« Liberté, Égalité, Fraternité ». Elle est inscrite sur les bâtiments publics : mairies, écoles, passeports.",
      },
      {
        title: "Les symboles de la France",
        list: [
          "Le drapeau : bleu, blanc, rouge (le « drapeau tricolore »).",
          "L'hymne national : la Marseillaise.",
          "La fête nationale : le 14 juillet (prise de la Bastille, 1789).",
          "Marianne : le symbole de la République, son buste est dans les mairies.",
          "Le coq : symbole sportif et traditionnel de la France.",
        ],
      },
      {
        title: "Les grandes dates de l'histoire",
        list: [
          "1789 : la Révolution française (prise de la Bastille le 14 juillet).",
          "1889 : la Tour Eiffel est construite pour l'Exposition universelle.",
          "1914-1918 : la Première Guerre mondiale.",
          "1939-1945 : la Seconde Guerre mondiale ; le 8 mai 1945, fin de la guerre en Europe.",
          "1958 : la Ve République (la Constitution actuelle).",
        ],
      },
      {
        title: "Les valeurs de la République",
        list: [
          "La liberté d'expression : dire son opinion.",
          "L'égalité : mêmes droits pour tous et toutes.",
          "La laïcité : la séparation de l'Église et de l'État ; la République ne reconnaît aucun culte.",
          "La fraternité et la solidarité : s'entraider.",
        ],
      },
      {
        title: "Personnes célèbres",
        list: [
          "Victor Hugo : écrivain (Les Misérables, Notre-Dame de Paris).",
          "Marie Curie : scientifique, deux prix Nobel (physique et chimie).",
          "Charles de Gaulle : général de la Seconde Guerre mondiale, président de la République.",
          "Claude Monet : peintre impressionniste.",
          "Édith Piaf : chanteuse (« La Vie en rose »).",
        ],
      },
    ],
    vocab: [
      { fr: "14 juillet", def: "la fête nationale française" },
      { fr: "La Marseillaise", def: "l'hymne national de la France" },
      { fr: "Liberté, Égalité, Fraternité", def: "la devise de la République française" },
      { fr: "Marianne", def: "le symbole de la République dans les mairies" },
      { fr: "1789", def: "l'année de la Révolution française" },
      { fr: "la laïcité", def: "la séparation de l'Église et de l'État" },
      { fr: "Victor Hugo", def: "l'écrivain des Misérables" },
      { fr: "Marie Curie", def: "la scientifique avec deux prix Nobel" },
      { fr: "Charles de Gaulle", def: "le général devenu président de la République" },
      { fr: "la Tour Eiffel", def: "le monument parisien construit en 1889" },
    ],
    quiz: [
      {
        q: "Quelle est la devise de la France ?",
        choices: ["Liberté, Égalité, Fraternité", "Travail, Famille, Patrie", "Dieu et mon droit"],
        answer: 0,
      },
      {
        q: "Le 14 juillet, on célèbre :",
        choices: ["la fête de la musique", "la prise de la Bastille", "la victoire de 1945"],
        answer: 1,
      },
      {
        q: "Quel est l'hymne national de la France ?",
        choices: ["La Vie en rose", "La Marseillaise", "Aux armes de Paris"],
        answer: 1,
      },
      {
        q: "Quelles sont les couleurs du drapeau français ?",
        choices: ["rouge, blanc, noir", "blanc, rouge, vert", "bleu, blanc, rouge"],
        answer: 2,
      },
      {
        q: "La laïcité, c'est :",
        choices: ["la séparation de l'Église et de l'État", "l'interdiction des cultes", "la religion officielle"],
        answer: 0,
      },
      {
        q: "En 1789, commence :",
        choices: ["la Première Guerre mondiale", "la Révolution française", "la construction de la Tour Eiffel"],
        answer: 1,
      },
      {
        q: "Qui a écrit « Les Misérables » ?",
        choices: ["Victor Hugo", "Jules Verne", "Édith Piaf"],
        answer: 0,
      },
      {
        q: "Marianne est :",
        choices: ["une reine de France", "le symbole de la République", "une chanson populaire"],
        answer: 1,
      },
    ],
  }
];

const PRONOUNS = [
  { pronoun: "je", key: "je" },
  { pronoun: "tu", key: "tu" },
  { pronoun: "il / elle", key: "il" },
  { pronoun: "nous", key: "nous" },
  { pronoun: "vous", key: "vous" },
  { pronoun: "ils / elles", key: "ils" }
];

const GROUP_LABELS = [
  "1er groupe (-er)",
  "2e groupe (finir)",
  "3e groupe (irrégulier)"
];



const VERB_TABLES = {
  "être": { je: "suis", tu: "es", il: "est", nous: "sommes", vous: "êtes", ils: "sont" },
  "avoir": { je: "ai", tu: "as", il: "a", nous: "avons", vous: "avez", ils: "ont" },
  "parler": { je: "parle", tu: "parles", il: "parle", nous: "parlons", vous: "parlez", ils: "parlent" },
  "habiter": { je: "habite", tu: "habites", il: "habite", nous: "habitons", vous: "habitez", ils: "habitent" },
  "aimer": { je: "aime", tu: "aimes", il: "aime", nous: "aimons", vous: "aimez", ils: "aiment" },
  "jouer": { je: "joue", tu: "joues", il: "joue", nous: "jouons", vous: "jouez", ils: "jouent" },
  "écouter": { je: "écoute", tu: "écoutes", il: "écoute", nous: "écoutons", vous: "écoutez", ils: "écoutent" },
  "étudier": { je: "étudie", tu: "étudies", il: "étudie", nous: "étudions", vous: "étudiez", ils: "étudient" },
  "travailler": { je: "travaille", tu: "travailles", il: "travaille", nous: "travaillons", vous: "travaillez", ils: "travaillent" },
  "manger": { je: "mange", tu: "manges", il: "mange", nous: "mangeons", vous: "mangez", ils: "mangent" },
  "finir": { je: "finis", tu: "finis", il: "finit", nous: "finissons", vous: "finissez", ils: "finissent" },
  "choisir": { je: "choisis", tu: "choisis", il: "choisit", nous: "choisissons", vous: "choisissez", ils: "choisissent" },
  "grandir": { je: "grandis", tu: "grandis", il: "grandit", nous: "grandissons", vous: "grandissez", ils: "grandissent" },
  "réfléchir": { je: "réfléchis", tu: "réfléchis", il: "réfléchit", nous: "réfléchissons", vous: "réfléchissez", ils: "réfléchissent" },
  "réussir": { je: "réussis", tu: "réussis", il: "réussit", nous: "réussissons", vous: "réussissez", ils: "réussissent" },
  "aller": { je: "vais", tu: "vas", il: "va", nous: "allons", vous: "allez", ils: "vont" },
  "faire": { je: "fais", tu: "fais", il: "fait", nous: "faisons", vous: "faites", ils: "font" },
  "venir": { je: "viens", tu: "viens", il: "vient", nous: "venons", vous: "venez", ils: "viennent" },
};

const VERB_GROUPS = {
  "parler": 0, "habiter": 0, "aimer": 0, "jouer": 0, "écouter": 0,
  "étudier": 0, "travailler": 0, "manger": 0,
  "finir": 1, "choisir": 1, "grandir": 1, "réfléchir": 1, "réussir": 1, "obéir": 1,
  "aller": 2, "faire": 2, "venir": 2, "partir": 2, "sortir": 2, "dormir": 2,
};
