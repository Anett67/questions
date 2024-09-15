const question = document.getElementById('question')
const answer = document.getElementById('answer')
const questionCount = document.getElementById('questionCount')
const questions = [
    {
        id: 1,
        text: 'Pourquoi voulez-vous devenir français?',
        answer: 'Expliquer que je me sens plus français que hongrois. Pourquoi je sens que je suis devenue française. Montrer que je n’ai plus aucune alternative. Projet personnel, mode de vie à la française que j’apprécie. J’admire la France, son impact sur les sciences, la culture, la mentalité etc.'
    },
    {
        id: 2,
        text: 'A quelle fréquence rentrez-vous dans votre pays d’origine?',
        answer: ''
    },
    {
        id: 3,
        text: 'Etes-vous mariée?',
        answer: ''
    },
    {
        id: 4,
        text: 'Etes-vous mariée?',
        answer: ''
    },
    {
        id: 5,
        text: 'Quelles sont les activités que vous effectuez avec votre conjoint?',
        answer: ''
    },
    {
        id: 6,
        text: 'Comptez-vous avoir des enfants?',
        answer: ''
    },
    {
        id: 7,
        text: 'Dans le couple qui s’occupe des enfants et des tâches ménagères?',
        answer: ''
    },
    {
        id: 8,
        text: 'Avez-vous des liens personnels et familiaux en France?',
        answer: 'Amis, collègues. Montrer que les liens sont solides en France.'
    },
    {
        id: 9,
        text: 'Quelle langue utilisez-vous au travail et à la maison?',
        answer: ''
    },
    {
        id: 10,
        text: 'Etes-vous membre d’une association?',
        answer: ''
    },
    {
        id: 11,
        text: 'Où se trouve son siège?',
        answer: ''
    },
    {
        id: 12,
        text: 'Pratiquez-vous une religion?',
        answer: ''
    },
    {
        id: 13,
        text: 'Quels sont vos loisirs?',
        answer: 'Tous les loisirs de tous les jours.'
    },
    {
        id: 14,
        text: 'Pourquoi êtes-vous venu en France la toute première fois?\n',
        answer: 'Pour le travail.'
    },
    {
        id: 15,
        text: 'Qu’avez-vous en France que vous n’avez pas dans votre pays d’origine?',
        answer: 'La liberté, la beauté du pays, la langue française, la mentalité, la gastronomie.'
    },
    {
        id: 16,
        text: 'Comment avez-vous appris le Français?',
        answer: 'A l’école, cours en ligne, sur place.'
    },
    {
        id: 17,
        text: 'Pendant combien de temps avez-vous appris le français?',
        answer: '4 ans à l’école. après en autodidacte, depuis mes 14 ans j’apprends'
    },
    {
        id: 18,
        text: 'Utilisez-vous la langue française au travail?',
        answer: 'Oui, pour communiquer avec les collègues tous les jours.'
    },
    {
        id: 19,
        text: 'Parlez-vous d’autres langues? Si oui, laquelle?',
        answer: 'Hongrois, anglais, allemand.'
    },
    {
        id: 20,
        text: 'Quelle langue vous paraît la plus facile? Pourquoi?',
        answer: 'Anglais. Conjugaison, grammaire moins complexe.'
    },
    {
        id: 21,
        text: 'Envoyez-vous de l’argent dans votre pays d’origine? Si oui à qui?',
        answer: ''
    },
    {
        id: 22,
        text: 'Avez-vous de la famille proche ou lointaine dans votre pays d’origine? Si oui comptez-vous les faire venir en France?',
        answer: 'Oui. Non, je sais que j’aurais même pas le droit.'
    },
    {
        id: 23,
        text: 'Où passez-vous vos vacances?',
        answer: ''
    },
    {
        id: 24,
        text: 'Quelles sont les nationalités des personnes de votre entourage?',
        answer: ''
    },
    {
        id: 25,
        text: 'Citez les 3 plus grandes villes françaises',
        answer: 'Marseilles, Lyon, Paris'
    },
    {
        id: 26,
        text: 'Citez trois départements français',
        answer: 'Haut-Rhin, Bas-Rhin, Haute-Garonne, Gironde'
    },
    {
        id: 27,
        text: 'Citez 3 département d’outre-mer',
        answer: 'Guadeloupe, la Réunion, Mayotte, la Martinique, Guyane'
    },
    {
        id: 28,
        text: 'Citez 3 régions Françaises',
        answer: 'L’île de France, Bretagne, Nouvelle-Aquitaine, la Normandie, Occitanie'
    },
    {
        id: 29,
        text: 'Énumérez les 3 types de collectivités Françaises',
        answer: 'Les communes (36000)\n' +
            'Les régions (12 en Métropole, 5 outre-mer)\n' +
            'Les départements (101, 96 en Métropole, 5 en outre-mer)\n'
    },
    {
        id: 30,
        text: 'Citez des fleuves Français',
        answer: 'La Garonne, La Loire, Le Rhône, Le Rhin, La Seine'
    },
    {
        id: 31,
        text: 'Citez des chaînes de montagne',
        answer: 'Pyrénées, Massif Central, Les Alpes, les Vosges, Le Jura'
    },
    {
        id: 32,
        text: 'En France quel est le point culminant?',
        answer: 'Le Mont Blanc (4809m) entre la France et l’Italie'
    },
    {
        id: 33,
        text: 'Quels sont les pays frontaliers ou limitrophes avec la France?',
        answer: 'L’espagne, l’Italie, la Suisse, l’Allemagne, Luxembourg, Belgique, Andorre, Monaco'
    },
    {
        id: 34,
        text: 'Dans quelle région sommes-nous?',
        answer: 'Nouvelle-Aquitaine'
    },
    {
        id: 35,
        text: 'Dans quelle département sommes-nous?',
        answer: 'Gironde'
    },
    {
        id: 36,
        text: 'Qui est le maire de votre département?',
        answer: 'Célia Monseigne (Partie socialiste) , Bordeaux: Pierre Hurmic (Les écologistes, gauche)'
    },
    {
        id: 37,
        text: 'Citez 3 rois de France',
        answer: 'Charlemagne, Henri IV, Louis XVI, Clovis, Louis XIV'
    },
    {
        id: 38,
        text: 'Citez des Reines de France',
        answer: 'Catherine de Medicis, Aliénor d’Aquitaine, Marie Antoinette, Anne d’Autriche'
    },
    {
        id: 39,
        text: 'En quoi et pourquoi Louis XIV est le plus connu?',
        answer: 'Le roi qui a régné le plus longtemps (72 ans), le symbole de la monarchie absolue, une sorte de dictature, combattu par la révolution française plus tard'
    },
    {
        id: 40,
        text: 'Qui a été le roi de France durant la révolution française?',
        answer: 'Louis XVI'
    },
    {
        id: 41,
        text: 'A quelle date précise a eu lieu la révolution française?',
        answer: '5 mai 1789, 9 novembre 1799'
    },
    {
        id: 42,
        text: 'Quel événement de la Révolution française vous a-t-il le plus marqué?',
        answer: '14 juillet 1789, la prise de la Bastille suite à une crise économique, inflation, impôts'
    },
    {
        id: 43,
        text: 'Quel évènement historique de la France vous a-t-il le plus marqué?',
        answer: 'N’import quel évènement, il faut justifier'
    },
    {
        id: 44,
        text: 'Quel était le rôle de la Bastille avant sa démolition?',
        answer: 'Une prison'
    },
    {
        id: 45,
        text: 'Quand a été adoptée la déclaration des droits de l’homme et du citoyen?',
        answer: 'le 26 août 1789'
    },
    {
        id: 46,
        text: 'Qui a instauré le code civil en France?',
        answer: 'Napoléon Bonaparte'
    },
    {
        id: 47,
        text: 'Quelles sont les dates des deux dernières guerres mondiales?',
        answer: '28 juillet 1914 - 1 novembre 1918, 1 septembre 1939 - 2 septembre 1945'
    },
    {
        id: 48,
        text: 'Connaissez-vous Jean Moulin? Pourquoi est-il connu?',
        answer: ''
    },
    {
        id: 49,
        text: 'Qui est Charles de Gaulle?',
        answer: 'Un militaire, résistant, homme politique, fondateur de la 5ème république, 1959 - 1969 président de la république'
    },
    {
        id: 50,
        text: 'Citez des monuments historiques Français que vous connaissez?',
        answer: 'Louvre, Tour Eiffel, l’Arc de Triomphe, le château de Versailles'
    },
    {
        id: 51,
        text: 'Quand a été instituée la 5ème république?',
        answer: '4 octobre 1958'
    },
    {
        id: 52,
        text: 'Quel a été le fait marquant de la 5ème république?',
        answer: 'La séparation du pouvoir exécutive, législative et judiciaire'
    },
    {
        id: 53,
        text: 'Quand a eu lieu la séparation de l\'Église et de l\'État?',
        answer: '9 dec 1905'
    },
    {
        id: 54,
        text: 'Quels personnages de l’histoire de France vous ont le plus marqué et ont marqué l’histoire?',
        answer: 'Citez un personnage ayant marqué l’histoire'
    },
    {
        id: 55,
        text: 'Pourquoi le 1er mai est-il férié?',
        answer: 'Fête du travail'
    },
    {
        id: 56,
        text: 'Pourquoi le 11 novembre est-il férié?',
        answer: 'La fin de la première guerre mondiale (l’Armistice)'
    },
    {
        id: 57,
        text: 'Que fête-t-on le 14 juillet?',
        answer: 'La prise de la Bastille 1789. Devenu fête national en 1790'
    },
    {
        id: 58,
        text: 'A quelle époque ont été bâties les cathédrales gothiques?',
        answer: 'Au moyen âge'
    },
    {
        id: 59,
        text: 'Qu’est-ce que l’hôtel de ville?',
        answer: 'La mairie principale d’une grande ville, ou d’une ville importante'
    },
    {
        id: 60,
        text: 'Avez-vous mangé des spécialités locales lors de vos voyages en France?',
        answer: 'Citez des plats des endroits que j’ai visité'
    },
    {
        id: 61,
        text: 'Quels sont les plats typiques Français que vous connaissez?',
        answer: 'Steak tartare, Quiche lorraine, Boeuf bourguignon, foie gras, Tartiflette, Cassoulet, Soupe à l’oignon'
    },
    {
        id: 62,
        text: 'Citez des personnages littéraires Français célèbres',
        answer: 'Victor Hugo, Albert Camus, Alexandre Dumas'
    },
    {
        id: 63,
        text: 'Citez des peintres Français célèbres',
        answer: 'Paul Cézanne, Eugène Delacroix, Claude Monet'
    },
    {
        id: 64,
        text: 'Citez des personnes naturalisées Français(e)',
        answer: 'Marie Curie, Joséphine Baker, Marc Chagall, Guillaume Apollinaire'
    },
    {
        id: 65,
        text: 'Citez des artistes Français connus',
        answer: 'Hector Berlioz, Joe Dassin, Charles Aznavour'
    },
    {
        id: 66,
        text: 'Citez des écrivains Français célèbres',
        answer: 'Molière, Victor Hugo, Beaumarchais'
    },
    {
        id: 67,
        text: 'Citez des oeuvres littéraires célèbres',
        answer: 'Notre Dame de Paris, Le malade imaginaire, Le mariage de Figaro, Les trois mousquetaires, Les misérables\n'
    },
    {
        id: 68,
        text: 'Qui a écrit les Trois mousquetaires?',
        answer: 'Alexandre Dumas, Auguste Maquet'
    },
    {
        id: 69,
        text: 'Qui était Voltaire?',
        answer: 'Ecrivain et philosophe du XVIIIème siècle'
    },
    {
        id: 70,
        text: 'Quel mouvement Voltaire appartient-il?',
        answer: 'La philosophie des Lumières, il est l’un des représentant les plus connus'
    },
    {
        id: 71,
        text: 'Quel grand événement Français connaissez-vous?',
        answer: 'Tour de France, Roland Garros, Marathon de Paris'
    },
    {
        id: 72,
        text: 'Avons-nous le droit en France de porter des signes religieux dans l’espace public?',
        answer: 'Oui, sauf les écoles, les collèges et les lycées publics'
    },
    {
        id: 73,
        text: 'Qu\'est-ce que la loi de 2004?',
        answer: 'Dans les écoles, les collèges et les lycées publics les élèves n’ont pas le droit de porter des signes religieux'
    },
    {
        id: 74,
        text: 'Connaissez-vous Brigitte Bardot?',
        answer: 'Actrice de cinéma, chanteuse et militante pour la cause animal'
    },
    {
        id: 75,
        text: 'Citez des philosophes connus des Lumières?',
        answer: 'Montesquieu, Voltaire, Diderot, Rousseau, Spinoza, Descartes'
    },
    {
        id: 76,
        text: 'Qu\'est-ce que la philosophie des lumières?',
        answer: 'Mouvement culturel, philosophique, littéraire et intellectuel, engagement contre les oppressions religieuses et politiques, fin de XVIIème siècle, ils se voyaient comme une élite avancée qui travaille pour le progrès du monde, combattant l\'irrationnel, l’arbitraire, l’obscurantisme et la superstition des siècles passées. Renouvellement de savoir, de l’éthique et de l’esthétique de leur temps. Leurs écrits ont eu une grande influence sur les événements de la fin du siècle (révolution, déclaration d\'indépendance des Etats-Unis).'
    },
    {
        id: 77,
        text: 'Connaissez-vous des sportifs Français?',
        answer: 'Zinedine Zidane, Teddy Riner, Tony Parker'
    },
    {
        id: 78,
        text: 'Citez des plats de votre région/ville/département',
        answer: 'Canelé, les huîtres d’Arcachon, Confit de canard, poulet basquaise, macaron de Saint Emilion'
    },
    {
        id: 79,
        text: 'En quelle année a été aboli l’esclavage en France?',
        answer: '27 avril 1848'
    },
    {
        id: 80,
        text: 'L’école est-elle obligatoire en France?',
        answer: 'Gratuit et obligatoire de 3 à 16 ans'
    },
    {
        id: 81,
        text: 'Depuis quand l’école est obligatoire en France?',
        answer: '28 mars 1882'
    },
    {
        id: 82,
        text: 'Qui a rendu l’école obligatoire en France?',
        answer: 'Jules Ferry, ancien maire de Paris'
    },
    {
        id: 83,
        text: 'Les femmes ont-elles le droit de vote en France?',
        answer: 'Oui'
    },
    {
        id: 84,
        text: 'Depuis quand les femmes ont-elles le droit de vote en France?',
        answer: '21 avril 1944'
    },
    {
        id: 85,
        text: 'Qui a été à l’origine du château de Versailles?',
        answer: 'Louis XIV'
    },
    {
        id: 86,
        text: 'Qui a été à l’origine de l’Arc de Triomphe?',
        answer: 'Napoleon I'
    },
    {
        id: 87,
        text: 'Quel est le monument principal en France?',
        answer: 'Tour Eiffel'
    },
    {
        id: 88,
        text: 'Qui a construit la tour Eiffel?',
        answer: 'Gustave Eiffel'
    },
    {
        id: 89,
        text: 'Quand la Tour Eiffel a été construite et à quel événement?',
        answer: '1889 pour l’exposition universelle de Paris'
    },
    {
        id: 90,
        text: 'Citez des animateurs de télévision Français que vous connaissez?',
        answer: 'Christophe Dechavanne, Vincent Lagaf, Jean-Pierre Foucault'
    },
    {
        id: 91,
        text: 'Citez des chanteurs Français connus',
        answer: 'Johnny Hallyday, Charles Aznavour, George Brassens, Michel Sardou'
    },
    {
        id: 92,
        text: 'Citez des journalistes Français connus',
        answer: 'Jean-Marc Morandini, Edwy Plenel, Ruth Elkrief, Yann Barthès'
    },
    {
        id: 93,
        text: 'Citez des acteurs/actrices Français que vous connaissez',
        answer: 'Marion Cotillard, Jean Dujardin, Christian Clavier, Vincent Cassel'
    },
    {
        id: 94,
        text: 'Citez des anciennes colonies Françaises',
        answer: 'Algérie, Sénégal, Côte d’Ivoir, Mali'
    },
    {
        id: 95,
        text: 'Qu’est-ce la guerre de 100 ans?',
        answer: 'Conflit entre la France et l’Angleterre au moyen âge'
    },
    {
        id: 96,
        text: 'Connaissez-vous la bataille de Verdun?',
        answer: '1916 l’armée française et l’armée allemande pendant la première guerre mondiale'
    },
    {
        id: 97,
        text: 'Quel était le surnom des soldats Français durant la première guerre mondiale?',
        answer: 'Les poilus'
    },
    {
        id: 98,
        text: 'Quand a eu lieu la première guerre mondiale?',
        answer: '28 juillet 1914 -  11 novembre 1918'
    },
    {
        id: 99,
        text: 'Quand a eu lieu la seconde guerre mondiale?',
        answer: '1 septembre 1939 - 2 septembre 1945'
    },
    {
        id: 100,
        text: 'Qui sont les alliés durant la première guerre mondiale?',
        answer: 'La France, l’Angleterre, la Russie et les Etats-Unis'
    },
    {
        id: 101,
        text: 'Qui sont les alliés durant la seconde guerre mondiale?',
        answer: 'La France, l’Angleterre, l’URSS, les Etats-Unis'
    },
    {
        id: 102,
        text: 'Quand a eu lieu le débarquement des alliés durant la 2nd guerre mondiale?',
        answer: '6 juin 1944'
    },
    {
        id: 103,
        text: 'Où a eu lieu le débarquement des alliés durant la 2nd guerre mondiale?',
        answer: 'En Normandie'
    },
    {
        id: 104,
        text: 'Quel sont les valeurs (ou la devise) de la république Française?',
        answer: 'Liberté, égalité, fraternité'
    },
    {
        id: 105,
        text: 'Si on devait ajouter une valeur quelle sera-t-elle selon vous?',
        answer: 'La laïcité'
    },
    {
        id: 106,
        text: 'Qu\'est-ce que la laïcité?',
        answer: 'Garantit la bilerté de conscience. La liberté de manifester ses croyances dans les limites du respect de l\'ordre public. Elle implique la neutralité de l\'Etat. Les affaires publics et religieuse sont séparées.'
    },
    {
        id: 107,
        text: 'Qu\'est-ce que pour la démocratie?',
        answer: 'Elle représente une système politique dans lequel le peuple est souverain, c\'est un régime politique dans lequel tous les citoyens participent aux décisions publics et à la vie politique du pays.'
    },
    {
        id: 108,
        text: 'Quelles sont les formes de la démocratie?',
        answer: 'Directe, participative et représentative'
    },
    {
        id: 109,
        text: 'Etes-vous d\'accord avec la régime démocratique?',
        answer: 'Absolument'
    },
    {
        id: 110,
        text: 'Quelles formes libertés sont garanties en démocratie?',
        answer: 'La liberté de pensé, la liberté de coyance, la liberté d\'expression, la liberté de se réunir'
    },
    {
        id: 111,
        text: 'Pensez-vous que la liberté d\'expression est abolue?',
        answer: 'Non, la liberté est garantie mais elle n\'est pas absolue. La liberté des uns s\'arrête là où commence celles des autres.'
    },
    {
        id: 112,
        text: 'Quels sont les droits et devoirs du citoyen Français?',
        answer: 'Le droit de vote, accès à l\'emploi public, le droit de circuler, de s\'exprimer, de croire ou de ne pas croire à une religion, le droit à la propriété, de créer une association. Il faut respecter les lois, payers les taxes et les impôts, des cotisations (sécurité sociale) et peuvent être appelé dans l\'armée en cas de guerre'
    },
    {
        id: 113,
        text: 'Quelles sont les symboles de la Rébuplique Française?',
        answer: 'La Marianne, le drapeau, la Marseillaise, la devise, le coq, la fleur de lys, le bonnet phrygien, le 14 juillet'
    },
    {
        id: 114,
        text: 'Quelles sot les couleurs du drapeau Français?',
        answer: 'Bleu, blanc, rouge. '
    },
    {
        id: 115,
        text: 'Que représentent les couleurs du drapeau Français?',
        answer: 'Le bleu représente la couleur de Paris, le blanc la couleur des rois, le rouge la couleur de Paris en référence au sang versé pour la libération du peuple.'
    },
    {
        id: 116,
        text: 'Qui est Marianne?',
        answer: 'Une figure symbolique de la république Française. Une femme coiffée dans le bonnet phrygien, elle représente la France et ses valeurs'
    },
    {
        id: 117,
        text: 'Qui est aujourd\'hui le président de la république?',
        answer: 'Emmanuel Macron'
    },
    {
        id: 118,
        text: 'Qui était le président de la république avant le président actuel?',
        answer: 'François Holland'
    },
    {
        id: 119,
        text: 'Qui est le premier ministre actuel?',
        answer: 'Michel Barnier'
    },
    {
        id: 120,
        text: 'Qui était le premier ministre avant le premier ministr actuel?',
        answer: 'Gabriel Attal'
    },
    {
        id: 121,
        text: 'Dans quel république sommes-nous aujourd\'hui?',
        answer: 'La 5ème république'
    },
    {
        id: 122,
        text: 'Quand sont les dates des précédentes républiques?',
        answer: '1er: 1792 - 1804, 2ème: 1848 - 1852, 3ème: 1870 - 1940, 4ème: 1946 - 1958, 5ème: 1958 - '
    },
    {
        id: 123,
        text: 'Qui a instauré la cinquième république?',
        answer: 'Charles de Gaulle'
    },
    {
        id: 124,
        text: 'Où se trouve le siège de la présidence de la république?',
        answer: 'A l\'Elysée'
    },
    {
        id: 125,
        text: 'Citez dans l\'ordre les présidents de la cinquième république?',
        answer: 'Charles de Gaulles, Georges Pompidou, Valéry Giscard d\'Estaing, François Mitterand, Jacques Chirac, Nicolas Sarkozy, François Holland, Emmanuel Macron'
    },
    {
        id: 126,
        text: 'Citez 3 anciens premier ministres Français de la cinquième république?',
        answer: 'Edouard Philippe, Elisabeth Borne, François Fillon'
    },
    {
        id: 127,
        text: 'Citez 3 ministres du gouvernement actuel',
        answer: 'Bruno Le Maire (économie, finances), Gérald Darmanin: minstre de l\'intérieurn Eric Dupont-Moretti: ministre de la Justice'
    },
    {
        id: 128,
        text: 'Pour combien de temps est élu le président de la république?',
        answer: '5 ans'
    },
    {
        id: 129,
        text: 'Par quel scrutin et pour combien de mandats peut être élu le président de la république?',
        answer: 'Le mandat est renouvelable une seule fois pour une duré de 5 ans. Il est élu au suffrage universel direct par un scrutin à la majorité absolue à deux tour'
    },
    {
        id: 130,
        text: 'Qui a le droit de voter aux élections?',
        answer: 'Tout les citoyens français majeurs'
    },
    {
        id: 131,
        text: 'Quel est l\'âge de ma majorité en France?',
        answer: '18 ans'
    },
    {
        id: 132,
        text: 'Qu\'est-ce que le parlement?',
        answer: 'Une assemblé élu par le peuple qui assure la représentation du peuple. Elle est composé de deux chambre, la chambre haute (les sièges des sénateurs) et la chambre basse (les sièges des députés) '
    },
    {
        id: 133,
        text: 'Quel est le rôle exacte du parlement?',
        answer: 'Il revoit, corrige et vote les lois. Il détient le pouvoir législative'
    },
    {
        id: 134,
        text: 'Citez les différentes institutions politiques en France?',
        answer: 'Le pouvoir exécutive, le pouvoir législative, le pouvoir judiciaire (exercé par les juges et les magistrats)'
    },
    {
        id: 135,
        text: 'Qu\'est-ce que le pouvoir exécutive et quelle est son rôle?',
        answer: 'Le pouvoir incarné par le président de la république et par son gouvernement. Son rôle est de mettre en ouvre les lois et conduire la politique national. Il peut dédicter les règlements, il dispose de l\'administration et de la force armée.'
    },
    {
        id: 136,
        text: 'Qu\'est-ce que le pouvoir législatif et quelle est son rôle?',
        answer: 'Il est exercé par les deux chambres du parlement, le Sénat et l\'Assemblé National. Il est chargé de la rédaction et de l\'adoption des lois et du contrôl de l\'exécutive'
    },
    {
        id: 137,
        text: 'Qu\'est-ce que le pouvoir judiciare et quelle est son rôle?',
        answer: 'Son rôle est de contrôler l\'appication de la loi et sanctionner son non-respect'
    },
    {
        id: 138,
        text: 'Comment sont élus les députés?',
        answer: 'Au suffrage universel direct uninominal à deux tours'
    },
    {
        id: 139,
        text: 'Pour combien d\'années sont élus les députés?',
        answer: '5 ans'
    },
    {
        id: 140,
        text: 'Où se trouve le siège de l\'Assemblé Nationale?',
        answer: 'Au palais Bourbon dans le 7e arrondissement de Paris'
    },
    {
        id: 141,
        text: 'Qui est le député (ou la député) de votre département?',
        answer: 'Bordeaux: Thomas Cazenave (Ensemble !), Saint-André: Edwige Diaz (Rassemblement Nationa)'
    },
    {
        id: 142,
        text: 'Qui constitue le gouvernement?',
        answer: 'Le premier ministre, les ministres, les ministres délégués, les secrétaires d\'Etat'
    },
    {
        id: 143,
        text: 'Qui est le président de l\'Assemblé National?',
        answer: 'Yaël Braun-Pivet depuis 2022'
    },
    {
        id: 144,
        text: 'Combien d\'années dure le mandat du président de l\'Assemblé National??',
        answer: '5 ans'
    },
    {
        id: 145,
        text: 'Qu\'est-ce que la chambre basse?',
        answer: 'L\'Assemblé National'
    },
    {
        id: 146,
        text: 'Qu\'est-ce que la chambre haute?',
        answer: 'Le sénat'
    },
    {
        id: 147,
        text: 'Qu\'est-ce que le sénat?',
        answer: 'Il constitue la chambre haute du parlement français. Les sénateurs détiennent le pouvoir législatives avec l\'Assemblé National'
    },
    {
        id: 148,
        text: 'Comment sont élus les sénateurs?',
        answer: 'Au suffrage universel indirect par un collège électoral composé de grands électeurs (députés, conseillers régionaus, conseillers départementaux, délégués des conseils municipaux)'
    },
    {
        id: 149,
        text: 'Pour combien d\'années sont élus les sénateurs?',
        answer: '6 ans'
    },
    {
        id: 150,
        text: 'Quelle est la différence entre un député et un sénateur?',
        answer: 'Le rôle du sénateur est d\'examiner très en détail et voter les lois et contrôler les actions du gouvernement et contrairement aux députés il défend aussi les interêts des communes, les départements et des régions (les collectivités territoriales). Son rôle est plus modérateur. Les députés ont un rôle central dans l\'élaboration des lois. L\'Assemblée nationale a le dernier mot en cas de désaccord avec le Sénat sur un projet de loi.'
    }
]

const questionIds = questions.map(question => question.id)
questionCount.innerHTML = questionIds.length.toString()
let selectedQuestion;
const nextQuestion = () => {
    answer.innerHTML = ''
    const index = Math.floor(Math.random() * questionIds.length);
    const id = questionIds.splice(index, 1)
    selectedQuestion = questions.find(question => question.id === id[0])
    question.innerHTML = selectedQuestion.text
    questionCount.innerHTML = questionIds.length.toString()
}

const showAnswer = () => {
    answer.innerHTML = selectedQuestion.answer.length ? selectedQuestion.answer : 'Pas de réponse'
}

nextQuestion()
