'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useLanguage } from '@/context/LanguageContext'

// Each section can have top-level items and/or subsections (subs).
// items: [{ p: 'text', list?: ['...'] }]
// subs:  [{ subnum: '2.1', subtitle: 'Title', items: [...] }]

const CONTENT = {
  de: {
    title: 'Datenschutzerklärung',
    subtitle: 'CrescentLabs UG (haftungsbeschränkt) · Stand: Februar 2026',
    sections: [
      {
        num: '1.',
        title: 'Verantwortlicher',
        items: [
          { p: 'Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:' },
          { p: 'CrescentLabs UG (haftungsbeschränkt)\nAdresse: Müllheim, Baden-Württemberg, Deutschland\nE-Mail: kerim@crescentlabs.de\nWebsite: www.crescentlabs.de' },
          { p: 'Ein Datenschutzbeauftragter ist gemäß Art. 37 DSGVO i. V. m. § 38 BDSG nicht zu bestellen, da CrescentLabs die gesetzlichen Schwellenwerte nicht überschreitet.' },
        ],
      },
      {
        num: '2.',
        title: 'Allgemeine Hinweise zur Datenverarbeitung',
        subs: [
          {
            subnum: '2.1',
            subtitle: 'Umfang der Verarbeitung personenbezogener Daten',
            items: [
              { p: 'Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.' },
            ],
          },
          {
            subnum: '2.2',
            subtitle: 'Rechtsgrundlagen',
            items: [
              { p: 'Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage. Bei der Verarbeitung personenbezogener Daten, die zur Erfüllung eines Vertrages erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Ist die Verarbeitung zur Wahrung eines berechtigten Interesses von uns oder eines Dritten erforderlich, dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage.' },
            ],
          },
          {
            subnum: '2.3',
            subtitle: 'Datenlöschung und Speicherdauer',
            items: [
              { p: 'Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung oder Löschung der Daten erfolgt auch dann, wenn eine durch die genannten Normen vorgeschriebene Speicherfrist abläuft, es sei denn, dass eine Erforderlichkeit zur weiteren Speicherung der Daten für einen Vertragsabschluss oder eine Vertragserfüllung besteht.' },
            ],
          },
        ],
      },
      {
        num: '3.',
        title: 'Bereitstellung der Website und Logfiles',
        subs: [
          {
            subnum: '3.1',
            subtitle: 'Beschreibung und Umfang der Datenverarbeitung',
            items: [
              {
                p: 'Bei jedem Aufruf unserer Website erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners. Folgende Daten werden hierbei erhoben:',
                list: [
                  'IP-Adresse des Nutzers (anonymisiert oder vollständig, je nach Hosting-Konfiguration)',
                  'Datum und Uhrzeit des Zugriffs',
                  'Websites, von denen das System des Nutzers auf unsere Website gelangt (Referrer)',
                  'Verwendeter Browser und Betriebssystem',
                  'Aufgerufene Seiten und übertragene Datenmenge',
                ],
              },
            ],
          },
          {
            subnum: '3.2',
            subtitle: 'Rechtsgrundlage',
            items: [
              { p: 'Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der technischen Bereitstellung, Sicherheit und Optimierung der Website.' },
            ],
          },
          {
            subnum: '3.3',
            subtitle: 'Speicherdauer',
            items: [
              { p: 'Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Im Falle der Erfassung der Daten zur Bereitstellung der Website ist dies der Fall, wenn die jeweilige Sitzung beendet ist. Logfiles werden spätestens nach 30 Tagen gelöscht.' },
            ],
          },
        ],
      },
      {
        num: '4.',
        title: 'Kontaktformular',
        subs: [
          {
            subnum: '4.1',
            subtitle: 'Beschreibung und Umfang der Datenverarbeitung',
            items: [
              {
                p: 'Auf unserer Website ist ein Kontaktformular vorhanden, welches für die elektronische Kontaktaufnahme genutzt werden kann. Nimmt ein Nutzer diese Möglichkeit wahr, so werden die in der Eingabemaske eingegeben Daten an uns übermittelt und gespeichert. Diese Daten sind in der Regel:',
                list: [
                  'Name und ggf. Firmenname',
                  'E-Mail-Adresse',
                  'Telefonnummer (optional)',
                  'Nachrichteninhalt',
                ],
              },
              { p: 'Zum Zeitpunkt der Absendung der Nachricht werden zudem folgende Daten gespeichert: IP-Adresse des Nutzers sowie Datum und Uhrzeit der Kontaktaufnahme.' },
            ],
          },
          {
            subnum: '4.2',
            subtitle: 'Rechtsgrundlage',
            items: [
              { p: 'Rechtsgrundlage für die Verarbeitung der Daten ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Zielt die Kontaktaufnahme auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO.' },
            ],
          },
          {
            subnum: '4.3',
            subtitle: 'Zweck der Datenverarbeitung',
            items: [
              { p: 'Die Verarbeitung der personenbezogenen Daten aus der Eingabemaske dient uns allein zur Bearbeitung der Kontaktaufnahme. Die sonstigen während des Absendevorgangs verarbeiteten personenbezogenen Daten dienen dazu, einen Missbrauch des Kontaktformulars zu verhindern und die Sicherheit unserer informationstechnischen Systeme sicherzustellen.' },
            ],
          },
          {
            subnum: '4.4',
            subtitle: 'Speicherdauer',
            items: [
              { p: 'Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Für die personenbezogenen Daten aus der Eingabemaske des Kontaktformulars ist dies dann der Fall, wenn die jeweilige Konversation mit dem Nutzer beendet ist. Steuerlich oder handelsrechtlich relevante Daten (z. B. bei Vertragsabschluss) werden entsprechend den gesetzlichen Aufbewahrungsfristen (bis zu 10 Jahre) gespeichert.' },
            ],
          },
          {
            subnum: '4.5',
            subtitle: 'Widerspruchsmöglichkeit',
            items: [
              { p: 'Der Nutzer hat jederzeit die Möglichkeit, seine Einwilligung zur Verarbeitung der personenbezogenen Daten zu widerrufen. Nimmt der Nutzer per E-Mail Kontakt mit uns auf, so kann er der Speicherung seiner personenbezogenen Daten jederzeit widersprechen. In einem solchen Fall kann die Konversation nicht fortgeführt werden. Alle personenbezogenen Daten, die im Zuge der Kontaktaufnahme gespeichert wurden, werden in diesem Fall gelöscht.' },
            ],
          },
        ],
      },
      {
        num: '5.',
        title: 'Google Analytics',
        subs: [
          {
            subnum: '5.1',
            subtitle: 'Beschreibung und Umfang der Datenverarbeitung',
            items: [
              { p: 'Wir nutzen Google Analytics, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (nachfolgend „Google"). Google Analytics verwendet Cookies und ähnliche Tracking-Technologien, um die Nutzung unserer Website zu analysieren. Die durch diese Technologien erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.' },
              { p: 'Wir setzen Google Analytics mit aktivierter IP-Anonymisierung ein. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt.' },
              {
                p: 'Folgende Daten werden dabei u. a. erhoben:',
                list: [
                  'Aufgerufene Seiten und Verweildauer',
                  'Herkunft des Besuchs (Referrer, Quelle)',
                  'Geräteinformationen (Browser, Betriebssystem, Bildschirmauflösung)',
                  'Ungefährer Standort (Land, Region – keine genaue Adresse)',
                  'Interaktionen auf der Website (Klicks, Scrollen)',
                ],
              },
            ],
          },
          {
            subnum: '5.2',
            subtitle: 'Rechtsgrundlage und Einwilligung',
            items: [
              { p: 'Der Einsatz von Google Analytics erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie Ihre Cookie-Einstellungen auf unserer Website anpassen oder das Browser-Plugin unter folgendem Link installieren: tools.google.com/dlpage/gaoptout' },
            ],
          },
          {
            subnum: '5.3',
            subtitle: 'Datenübertragung in Drittländer',
            items: [
              { p: 'Google verarbeitet Ihre Daten in den USA. Google LLC ist nach dem EU-US Data Privacy Framework zertifiziert, welches ein angemessenes Datenschutzniveau gewährleistet (Art. 45 DSGVO). Weitere Informationen zur Datenverarbeitung durch Google finden Sie in der Google-Datenschutzerklärung: policies.google.com/privacy' },
            ],
          },
          {
            subnum: '5.4',
            subtitle: 'Auftragsverarbeitung',
            items: [
              { p: 'Wir haben mit Google einen Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO abgeschlossen. Google verarbeitet die Daten in unserem Auftrag und ist vertraglich verpflichtet, die Daten ausschließlich gemäß unseren Weisungen und den Anforderungen der DSGVO zu verarbeiten.' },
            ],
          },
          {
            subnum: '5.5',
            subtitle: 'Speicherdauer',
            items: [
              { p: 'Die über Google Analytics erhobenen Daten werden nach 14 Monaten automatisch gelöscht. Daten, deren Aufbewahrungsdauer erreicht ist, werden einmal im Monat automatisch gelöscht.' },
            ],
          },
        ],
      },
      {
        num: '6.',
        title: 'Cookies und Consent-Management',
        items: [
          { p: 'Unsere Website verwendet Cookies. Cookies sind Textdateien, die im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem des Nutzers gespeichert werden. Ruft ein Nutzer eine Website auf, so kann ein Cookie auf dem Betriebssystem des Nutzers gespeichert werden.' },
          { p: 'Wir unterscheiden zwischen technisch notwendigen Cookies (die keine Einwilligung erfordern) und optionalen Cookies für Analysezwecke (Google Analytics). Beim ersten Besuch unserer Website werden Sie über ein Consent-Banner um Ihre Einwilligung für optionale Cookies gebeten. Ohne Ihre Einwilligung werden keine Analyse-Cookies gesetzt.' },
          { p: 'Sie können Ihre Cookie-Einwilligung jederzeit über den Link „Cookie-Einstellungen" in der Fußzeile unserer Website widerrufen oder anpassen.' },
        ],
      },
      {
        num: '7.',
        title: 'Rechte der betroffenen Person',
        items: [
          { p: 'Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i. S. d. DSGVO und es stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:' },
        ],
        subs: [
          {
            subnum: '7.1',
            subtitle: 'Auskunftsrecht (Art. 15 DSGVO)',
            items: [
              { p: 'Sie können von dem Verantwortlichen eine Bestätigung darüber verlangen, ob personenbezogene Daten, die Sie betreffen, von uns verarbeitet werden. Liegt eine solche Verarbeitung vor, können Sie über folgende Informationen Auskunft verlangen: Verarbeitungszwecke, Kategorien der verarbeiteten Daten, Empfänger, geplante Speicherdauer, Bestehen eines Widerspruchs- oder Löschungsrechts sowie das Recht zur Beschwerde bei einer Aufsichtsbehörde.' },
            ],
          },
          {
            subnum: '7.2',
            subtitle: 'Recht auf Berichtigung (Art. 16 DSGVO)',
            items: [
              { p: 'Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen, unrichtig oder unvollständig sind.' },
            ],
          },
          {
            subnum: '7.3',
            subtitle: 'Recht auf Löschung (Art. 17 DSGVO)',
            items: [
              { p: 'Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, sofern einer der gesetzlichen Gründe (z. B. Wegfall des Zwecks, Widerruf der Einwilligung) vorliegt und keine Aufbewahrungspflicht entgegensteht.' },
            ],
          },
          {
            subnum: '7.4',
            subtitle: 'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)',
            items: [
              { p: 'Unter bestimmten Voraussetzungen können Sie die Einschränkung der Verarbeitung der Sie betreffenden personenbezogenen Daten verlangen, etwa wenn Sie die Richtigkeit der Daten bestreiten oder die Verarbeitung unrechtmäßig ist.' },
            ],
          },
          {
            subnum: '7.5',
            subtitle: 'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)',
            items: [
              { p: 'Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.' },
            ],
          },
          {
            subnum: '7.6',
            subtitle: 'Widerspruchsrecht (Art. 21 DSGVO)',
            items: [
              { p: 'Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen. Wir verarbeiten Ihre personenbezogenen Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen.' },
            ],
          },
          {
            subnum: '7.7',
            subtitle: 'Beschwerderecht bei der Aufsichtsbehörde (Art. 77 DSGVO)',
            items: [
              { p: 'Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde zu. Die zuständige Aufsichtsbehörde für CrescentLabs ist:' },
              { p: 'Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg\nAdresse: Lautenschlagerstraße 20, 70173 Stuttgart\nWebsite: www.baden-wuerttemberg.datenschutz.de' },
            ],
          },
        ],
      },
      {
        num: '8.',
        title: 'Kontakt zum Datenschutz',
        items: [
          { p: 'Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:' },
          { p: 'CrescentLabs UG (haftungsbeschränkt)\nE-Mail: kerim@crescentlabs.de' },
          { p: 'Wir werden Ihr Anliegen schnellstmöglich, spätestens jedoch innerhalb eines Monats, bearbeiten.' },
        ],
      },
      {
        num: '9.',
        title: 'Aktualität und Änderung dieser Datenschutzerklärung',
        items: [
          { p: 'Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Februar 2026. Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website unter dem Link „Datenschutz" abgerufen und ausgedruckt werden.' },
        ],
      },
    ],
  },

  en: {
    title: 'Privacy Policy',
    subtitle: 'CrescentLabs UG (haftungsbeschränkt) · As of: February 2026',
    sections: [
      {
        num: '1.',
        title: 'Controller',
        items: [
          { p: 'The controller within the meaning of the General Data Protection Regulation (GDPR) and other national data protection laws and other data protection regulations is:' },
          { p: 'CrescentLabs UG (haftungsbeschränkt)\nAddress: Müllheim, Baden-Württemberg, Germany\nEmail: kerim@crescentlabs.de\nWebsite: www.crescentlabs.de' },
          { p: 'A data protection officer is not required to be appointed pursuant to Art. 37 GDPR in conjunction with § 38 BDSG, as CrescentLabs does not exceed the statutory thresholds.' },
        ],
      },
      {
        num: '2.',
        title: 'General Information on Data Processing',
        subs: [
          {
            subnum: '2.1',
            subtitle: 'Scope of Processing Personal Data',
            items: [
              { p: 'We process personal data of our users only to the extent necessary to provide a functioning website and our content and services. Personal data is generally only processed with the user\'s consent. An exception applies in cases where prior consent cannot be obtained for practical reasons and the processing of data is permitted by law.' },
            ],
          },
          {
            subnum: '2.2',
            subtitle: 'Legal Basis',
            items: [
              { p: 'Where we obtain the consent of the data subject for the processing of personal data, Art. 6(1)(a) GDPR serves as the legal basis. For the processing of personal data necessary for the performance of a contract, Art. 6(1)(b) GDPR serves as the legal basis. Where processing is necessary for the purposes of the legitimate interests pursued by us or a third party, Art. 6(1)(f) GDPR serves as the legal basis.' },
            ],
          },
          {
            subnum: '2.3',
            subtitle: 'Data Erasure and Storage Duration',
            items: [
              { p: 'Personal data of the data subject will be erased or blocked as soon as the purpose of storage no longer applies. Storage may also take place where provided for by European or national legislation in Union regulations, laws or other provisions to which the controller is subject. Data will also be blocked or erased when a storage period prescribed by the above-mentioned standards expires, unless there is a need for further storage of the data for the conclusion or performance of a contract.' },
            ],
          },
        ],
      },
      {
        num: '3.',
        title: 'Provision of the Website and Log Files',
        subs: [
          {
            subnum: '3.1',
            subtitle: 'Description and Scope of Data Processing',
            items: [
              {
                p: 'Each time our website is accessed, our system automatically collects data and information from the computer system of the accessing computer. The following data is collected:',
                list: [
                  'IP address of the user (anonymised or complete, depending on hosting configuration)',
                  'Date and time of access',
                  'Websites from which the user\'s system reached our website (referrer)',
                  'Browser and operating system used',
                  'Pages accessed and data transferred',
                ],
              },
            ],
          },
          {
            subnum: '3.2',
            subtitle: 'Legal Basis',
            items: [
              { p: 'The legal basis for the temporary storage of data and log files is Art. 6(1)(f) GDPR. Our legitimate interest lies in the technical provision, security and optimisation of the website.' },
            ],
          },
          {
            subnum: '3.3',
            subtitle: 'Storage Duration',
            items: [
              { p: 'The data is erased as soon as it is no longer necessary for the purpose for which it was collected. In the case of data collected to provide the website, this is when the respective session ends. Log files are deleted after a maximum of 30 days.' },
            ],
          },
        ],
      },
      {
        num: '4.',
        title: 'Contact Form',
        subs: [
          {
            subnum: '4.1',
            subtitle: 'Description and Scope of Data Processing',
            items: [
              {
                p: 'Our website contains a contact form which can be used for electronic contact. If a user makes use of this option, the data entered in the input form is transmitted to us and stored. This data typically includes:',
                list: [
                  'Name and, where applicable, company name',
                  'Email address',
                  'Phone number (optional)',
                  'Message content',
                ],
              },
              { p: 'At the time of sending the message, the following data is also stored: IP address of the user, date and time of contact.' },
            ],
          },
          {
            subnum: '4.2',
            subtitle: 'Legal Basis',
            items: [
              { p: 'The legal basis for the processing of the data is Art. 6(1)(f) GDPR (legitimate interest in responding to enquiries). If the contact is aimed at the conclusion of a contract, the additional legal basis for the processing is Art. 6(1)(b) GDPR.' },
            ],
          },
          {
            subnum: '4.3',
            subtitle: 'Purpose of Data Processing',
            items: [
              { p: 'The processing of personal data from the input form serves us solely to process the contact. The other personal data processed during the sending process serves to prevent misuse of the contact form and to ensure the security of our information technology systems.' },
            ],
          },
          {
            subnum: '4.4',
            subtitle: 'Storage Duration',
            items: [
              { p: 'The data is erased as soon as it is no longer necessary for the purpose for which it was collected. For the personal data from the contact form input, this is the case when the respective conversation with the user has ended. Data relevant for tax or commercial law purposes (e.g. upon conclusion of a contract) is stored in accordance with the statutory retention periods (up to 10 years).' },
            ],
          },
          {
            subnum: '4.5',
            subtitle: 'Right to Object',
            items: [
              { p: 'The user has the right to withdraw consent to the processing of personal data at any time. If the user contacts us by email, they may object to the storage of their personal data at any time. In such a case, the conversation cannot be continued. All personal data stored in the course of contact will be erased in this case.' },
            ],
          },
        ],
      },
      {
        num: '5.',
        title: 'Google Analytics',
        subs: [
          {
            subnum: '5.1',
            subtitle: 'Description and Scope of Data Processing',
            items: [
              { p: 'We use Google Analytics, a web analytics service provided by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland (hereinafter "Google"). Google Analytics uses cookies and similar tracking technologies to analyse the use of our website. The information generated by these technologies about your use of this website is generally transmitted to a Google server in the USA and stored there.' },
              { p: 'We use Google Analytics with IP anonymisation enabled. This means that your IP address is truncated by Google within member states of the European Union or in other states party to the Agreement on the European Economic Area before transmission.' },
              {
                p: 'The following data is collected, among others:',
                list: [
                  'Pages accessed and time spent',
                  'Origin of visit (referrer, source)',
                  'Device information (browser, operating system, screen resolution)',
                  'Approximate location (country, region — no precise address)',
                  'Interactions on the website (clicks, scrolling)',
                ],
              },
            ],
          },
          {
            subnum: '5.2',
            subtitle: 'Legal Basis and Consent',
            items: [
              { p: 'The use of Google Analytics is based on your consent pursuant to Art. 6(1)(a) GDPR. You can withdraw your consent at any time with effect for the future by adjusting your cookie settings on our website or by installing the browser plugin at: tools.google.com/dlpage/gaoptout' },
            ],
          },
          {
            subnum: '5.3',
            subtitle: 'Data Transfer to Third Countries',
            items: [
              { p: 'Google processes your data in the USA. Google LLC is certified under the EU-US Data Privacy Framework, which ensures an adequate level of data protection (Art. 45 GDPR). Further information on data processing by Google can be found in Google\'s privacy policy: policies.google.com/privacy' },
            ],
          },
          {
            subnum: '5.4',
            subtitle: 'Data Processing Agreement',
            items: [
              { p: 'We have concluded a data processing agreement with Google pursuant to Art. 28 GDPR. Google processes the data on our behalf and is contractually obliged to process the data exclusively in accordance with our instructions and the requirements of the GDPR.' },
            ],
          },
          {
            subnum: '5.5',
            subtitle: 'Storage Duration',
            items: [
              { p: 'Data collected via Google Analytics is automatically deleted after 14 months. Data that has reached its retention period is automatically deleted once a month.' },
            ],
          },
        ],
      },
      {
        num: '6.',
        title: 'Cookies and Consent Management',
        items: [
          { p: 'Our website uses cookies. Cookies are text files that are stored in the internet browser or by the internet browser on the user\'s computer system. When a user visits a website, a cookie may be stored on the user\'s operating system.' },
          { p: 'We distinguish between technically necessary cookies (which do not require consent) and optional cookies for analytical purposes (Google Analytics). When you first visit our website, you will be asked for your consent to optional cookies via a consent banner. Without your consent, no analytical cookies will be set.' },
          { p: 'You can withdraw or adjust your cookie consent at any time via the "Cookie Settings" link in the footer of our website.' },
        ],
      },
      {
        num: '7.',
        title: 'Rights of the Data Subject',
        items: [
          { p: 'If personal data concerning you is processed, you are a data subject within the meaning of the GDPR and you have the following rights against the controller:' },
        ],
        subs: [
          {
            subnum: '7.1',
            subtitle: 'Right of Access (Art. 15 GDPR)',
            items: [
              { p: 'You may request confirmation from the controller as to whether personal data concerning you is being processed by us. If such processing exists, you may request information on: purposes of processing, categories of personal data, recipients, planned storage period, existence of a right to object or erasure, and the right to lodge a complaint with a supervisory authority.' },
            ],
          },
          {
            subnum: '7.2',
            subtitle: 'Right to Rectification (Art. 16 GDPR)',
            items: [
              { p: 'You have the right to request rectification and/or completion from the controller if the personal data concerning you that is processed is inaccurate or incomplete.' },
            ],
          },
          {
            subnum: '7.3',
            subtitle: 'Right to Erasure (Art. 17 GDPR)',
            items: [
              { p: 'You may request that the personal data concerning you be erased without undue delay by the controller, provided one of the legal grounds (e.g. lapse of purpose, withdrawal of consent) applies and no retention obligation applies.' },
            ],
          },
          {
            subnum: '7.4',
            subtitle: 'Right to Restriction of Processing (Art. 18 GDPR)',
            items: [
              { p: 'Under certain conditions, you may request the restriction of processing of personal data concerning you, for example if you contest the accuracy of the data or the processing is unlawful.' },
            ],
          },
          {
            subnum: '7.5',
            subtitle: 'Right to Data Portability (Art. 20 GDPR)',
            items: [
              { p: 'You have the right to receive the personal data concerning you that you have provided to us in a structured, commonly used and machine-readable format.' },
            ],
          },
          {
            subnum: '7.6',
            subtitle: 'Right to Object (Art. 21 GDPR)',
            items: [
              { p: 'If your personal data is processed on the basis of legitimate interests pursuant to Art. 6(1)(f) GDPR, you have the right to object to the processing of your personal data pursuant to Art. 21 GDPR. We will then no longer process your personal data unless we can demonstrate compelling legitimate grounds for the processing.' },
            ],
          },
          {
            subnum: '7.7',
            subtitle: 'Right to Lodge a Complaint with a Supervisory Authority (Art. 77 GDPR)',
            items: [
              { p: 'Without prejudice to any other administrative or judicial remedy, you have the right to lodge a complaint with a supervisory authority. The competent supervisory authority for CrescentLabs is:' },
              { p: 'Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg\nAddress: Lautenschlagerstraße 20, 70173 Stuttgart\nWebsite: www.baden-wuerttemberg.datenschutz.de' },
            ],
          },
        ],
      },
      {
        num: '8.',
        title: 'Privacy Contact',
        items: [
          { p: 'If you have questions about the collection, processing or use of your personal data, or wish to request information, rectification, blocking or erasure of data, please contact:' },
          { p: 'CrescentLabs UG (haftungsbeschränkt)\nEmail: kerim@crescentlabs.de' },
          { p: 'We will process your request as quickly as possible and at the latest within one month.' },
        ],
      },
      {
        num: '9.',
        title: 'Currency and Amendment of this Privacy Policy',
        items: [
          { p: 'This privacy policy is currently valid and was last updated in February 2026. Due to the further development of our website and services, or due to changes in legal or regulatory requirements, it may be necessary to amend this privacy policy. The current version of the privacy policy can be accessed and printed at any time on the website under the "Privacy" link.' },
        ],
      },
    ],
  },
}

function Items({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i}>
          <p className="text-white/70 text-[0.9375rem] leading-[1.8] whitespace-pre-line">{item.p}</p>
          {item.list && (
            <ul className="mt-2 space-y-1.5 pl-4">
              {item.list.map((li, j) => (
                <li key={j} className="flex items-start gap-2.5 text-white/70 text-[0.9375rem] leading-[1.8]">
                  <span className="mt-[0.65em] w-1 h-1 rounded-full bg-white/25 flex-shrink-0" />
                  {li}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default function PrivacyPage() {
  const { lang } = useLanguage()
  const c = CONTENT[lang] || CONTENT.de

  return (
    <div className="min-h-svh bg-[#050508] text-white">
      <Navbar variant="dark" />

      <main className="max-w-3xl mx-auto px-6 lg:px-8 pt-40 pb-32">

        <h1 className="text-5xl font-semibold tracking-tight mb-2">{c.title}</h1>
        <p className="text-white/35 text-sm mb-16">{c.subtitle}</p>

        <div className="space-y-0">
          {c.sections.map((section) => (
            <div key={section.num} className="py-10 border-b border-white/8 last:border-0">

              {/* Section header */}
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/30 flex-shrink-0 w-8">
                  {section.num}
                </span>
                <h2 className="text-base font-semibold text-white">{section.title}</h2>
              </div>

              {/* Top-level items (before subsections) */}
              {section.items && (
                <div className="pl-11 mb-5">
                  <Items items={section.items} />
                </div>
              )}

              {/* Subsections */}
              {section.subs && (
                <div className="pl-11 space-y-6">
                  {section.subs.map((sub) => (
                    <div key={sub.subnum}>
                      <div className="flex items-baseline gap-2.5 mb-3">
                        <span className="text-[10px] font-semibold tracking-wider text-white/25 flex-shrink-0">
                          {sub.subnum}
                        </span>
                        <h3 className="text-sm font-semibold text-white/60">{sub.subtitle}</h3>
                      </div>
                      <div className="pl-8">
                        <Items items={sub.items} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>

      </main>

      <Footer variant="dark" />
    </div>
  )
}
