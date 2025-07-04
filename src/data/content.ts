import { Section, SubSection } from '../types';

export const sections: Section[] = [
  {
    id: 'prerequisites',
    title: 'Pré-requis',
    description: 'Tout ce dont vous avez besoin pour bien démarrer dans l\'entreprise',
    icon: 'ClipboardCheck',
    path: '/prerequisites',
    color: 'bg-blue-500'
  },
  {
    id: 'carpentry',
    title: 'Menuiserie / Matériaux',
    description: 'Guide complet sur les matériaux et techniques de menuiserie',
    icon: 'Hammer',
    path: '/carpentry',
    color: 'bg-green-500'
  },
  {
    id: 'foam',
    title: 'Mousse / Matériaux',
    description: 'Informations détaillées sur les mousses et matériaux spécialisés',
    icon: 'Package',
    path: '/foam',
    color: 'bg-purple-500'
  },
  {
    id: 'orders',
    title: 'Commandes via Business Central',
    description: 'Processus de commande et utilisation de Business Central',
    icon: 'ShoppingCart',
    path: '/orders',
    color: 'bg-orange-500'
  }
];

export const sectionContent: Record<string, SubSection[]> = {
  prerequisites: [
    {
      id: 'pre-1',
      title: 'Documents administratifs',
      content: 'Pour votre intégration, vous devez fournir les documents suivants : carte d\'identité, RIB, certificat médical, et attestation de sécurité sociale. Ces documents doivent être remis au service RH dans les 48h suivant votre arrivée.'
    },
    {
      id: 'pre-2',
      title: 'Équipements de sécurité',
      content: 'L\'entreprise fournit tous les équipements de protection individuelle (EPI) nécessaires : casque, chaussures de sécurité, gants, et lunettes de protection. Une formation sécurité obligatoire est prévue le premier jour.'
    },
    {
      id: 'pre-3',
      title: 'Accès et badges',
      content: 'Votre badge d\'accès sera créé lors de votre premier jour. Il vous permet d\'accéder aux différentes zones de l\'entreprise et sert également pour la pointeuse. En cas de perte, contactez immédiatement le service sécurité.'
    },
    {
      id: 'pre-4',
      title: 'Formation initiale',
      content: 'Une formation de 3 jours est prévue pour tous les nouveaux arrivants. Elle couvre les procédures de l\'entreprise, les normes de sécurité, et une introduction aux outils et systèmes utilisés.'
    }
  ],
  carpentry: [
    {
      id: 'carp-1',
      title: 'Types de bois',
      content: 'Notre entreprise travaille avec différents types de bois : chêne, hêtre, pin, et contreplaqué. Chaque essence a ses propriétés spécifiques et ses utilisations recommandées. Le chêne est privilégié pour les meubles haut de gamme, le pin pour les structures légères.'
    },
    {
      id: 'carp-2',
      title: 'Outils et machines',
      content: 'L\'atelier dispose de scies circulaires, raboteuses, ponceuses, et tours à bois. Une formation spécifique est requise pour chaque machine. Les outils manuels sont disponibles dans l\'armoire centrale et doivent être remis en place après utilisation.'
    },
    {
      id: 'carp-3',
      title: 'Techniques d\'assemblage',
      content: 'Nous utilisons diverses techniques : tenon-mortaise, queue d\'aronde, lamello, et vissage. Le choix dépend du projet et de la résistance requise. Des guides détaillés sont disponibles pour chaque technique.'
    },
    {
      id: 'carp-4',
      title: 'Finitions et traitements',
      content: 'Les finitions incluent vernis, huiles, lasures et peintures. Chaque produit a ses spécificités d\'application. Le séchage doit se faire dans la zone dédiée avec une ventilation appropriée.'
    }
  ],
  foam: [
    {
      id: 'foam-1',
      title: 'Types de mousses',
      content: 'Nous travaillons avec des mousses polyuréthane de différentes densités (15 à 50 kg/m³), des mousses à mémoire de forme, et des mousses haute résilience. Chaque type a ses applications spécifiques selon le confort recherché.'
    },
    {
      id: 'foam-2',
      title: 'Découpe et façonnage',
      content: 'La découpe se fait avec des machines à fil chaud ou des scies spéciales. Les gabarits doivent être préparés avec précision. Le façonnage peut inclure le thermoformage pour des formes complexes.'
    },
    {
      id: 'foam-3',
      title: 'Collage et assemblage',
      content: 'Les colles utilisées varient selon le type de mousse et l\'application. Les temps de séchage doivent être respectés. L\'assemblage multicouches permet d\'obtenir des propriétés spécifiques.'
    },
    {
      id: 'foam-4',
      title: 'Normes et certifications',
      content: 'Toutes nos mousses respectent les normes européennes de sécurité incendie et d\'émissions. Les certificats sont disponibles pour chaque référence. Les tests de qualité sont effectués régulièrement.'
    }
  ],
  orders: [
    {
      id: 'order-1',
      title: 'Accès à Business Central',
      content: 'Vos identifiants Business Central vous seront fournis par le service IT. L\'accès se fait via le portail web sécurisé. Une formation initiale de 2 heures est prévue pour vous familiariser avec l\'interface.'
    },
    {
      id: 'order-2',
      title: 'Création de commandes',
      content: 'Pour créer une commande : accédez au module Achats, cliquez sur Nouvelle commande, remplissez les informations fournisseur et articles. La validation suit un workflow d\'approbation selon le montant.'
    },
    {
      id: 'order-3',
      title: 'Suivi et réception',
      content: 'Le suivi des commandes se fait dans l\'onglet "Mes commandes". Les notifications vous informent de l\'avancement. À réception, validez la conformité dans le système et archivez le bon de livraison.'
    },
    {
      id: 'order-4',
      title: 'Gestion des stocks',
      content: 'Business Central permet de consulter les stocks en temps réel. Les seuils d\'alerte déclenchent automatiquement des suggestions de réapprovisionnement. L\'inventaire physique est effectué mensuellement.'
    }
  ]
};

export const searchableContent = [
  { id: 's1', title: 'Badge d\'accès', section: 'Pré-requis', excerpt: 'Votre badge d\'accès sera créé lors de votre premier jour...', path: '/prerequisites' },
  { id: 's2', title: 'Types de bois', section: 'Menuiserie', excerpt: 'Notre entreprise travaille avec différents types de bois...', path: '/carpentry' },
  { id: 's3', title: 'Mousses polyuréthane', section: 'Mousse', excerpt: 'Nous travaillons avec des mousses polyuréthane de différentes densités...', path: '/foam' },
  { id: 's4', title: 'Business Central', section: 'Commandes', excerpt: 'Vos identifiants Business Central vous seront fournis...', path: '/orders' },
  { id: 's5', title: 'Formation sécurité', section: 'Pré-requis', excerpt: 'Une formation sécurité obligatoire est prévue le premier jour...', path: '/prerequisites' },
  { id: 's6', title: 'Outils de menuiserie', section: 'Menuiserie', excerpt: 'L\'atelier dispose de scies circulaires, raboteuses...', path: '/carpentry' }
];
