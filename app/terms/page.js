'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useLanguage } from '@/context/LanguageContext'

const CONTENT = {
  de: {
    title: 'Allgemeine Geschäftsbedingungen',
    subtitle: 'CrescentLabs UG (haftungsbeschränkt) · Stand: Februar 2026',
    sections: [
      {
        num: '§ 1',
        title: 'Geltungsbereich und Vertragsparteien',
        items: [
          { p: '(1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") der CrescentLabs UG (haftungsbeschränkt), Müllheim, Deutschland (nachfolgend „CrescentLabs" oder „Auftragnehmer") gelten für alle Verträge über die Erbringung von Dienstleistungen, insbesondere Webdesign, Websiteerstellung und iOS-App-Entwicklung, die CrescentLabs mit Unternehmern im Sinne des § 14 BGB abschließt.' },
          { p: '(2) Unternehmer im Sinne dieser AGB ist jede natürliche oder juristische Person oder rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt.' },
          { p: '(3) Diese AGB gelten ausschließlich. Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Auftraggebers werden nur dann und insoweit Vertragsbestandteil, als CrescentLabs ihrer Geltung ausdrücklich schriftlich zugestimmt hat.' },
          { p: '(4) Individuell getroffene Vereinbarungen mit dem Auftraggeber (einschließlich Nebenabreden, Ergänzungen und Änderungen) haben in jedem Fall Vorrang vor diesen AGB.' },
        ],
      },
      {
        num: '§ 2',
        title: 'Vertragsschluss und Angebote',
        items: [
          { p: '(1) Angebote von CrescentLabs sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind. Ein Angebot ist in der Regel 30 Kalendertage ab Ausstellungsdatum gültig.' },
          { p: '(2) Der Vertrag kommt durch schriftliche oder elektronische Auftragserteilung des Auftraggebers und deren schriftliche oder elektronische Bestätigung durch CrescentLabs zustande. Die elektronische Form (E-Mail) ist der Schriftform gleichgestellt, sofern nicht anderweitig vereinbart.' },
          { p: '(3) Der Leistungsumfang ergibt sich aus dem jeweiligen Angebot bzw. der Projektbeschreibung. Mündliche Abreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung durch CrescentLabs.' },
        ],
      },
      {
        num: '§ 3',
        title: 'Mitwirkungspflichten des Auftraggebers',
        items: [
          {
            p: '(1) Der Auftraggeber ist verpflichtet, CrescentLabs alle für die Leistungserbringung notwendigen Informationen, Materialien, Zugänge und Freigaben rechtzeitig und vollständig zur Verfügung zu stellen. Hierzu zählen insbesondere:',
            list: [
              'Texte, Bilder, Logos und sonstige Inhalte in verwendbarer digitaler Form',
              'Zugangsdaten zu bestehenden Systemen (z. B. Server, CMS, App Store Connect)',
              'Freigaben und Feedback innerhalb vereinbarter Fristen',
              'Benennung eines verantwortlichen Ansprechpartners auf Auftraggeberseite',
            ],
          },
          { p: '(2) Verzögerungen, die durch nicht rechtzeitige oder unvollständige Zulieferung des Auftraggebers entstehen, gehen nicht zu Lasten von CrescentLabs. Dadurch bedingte Mehraufwände werden dem Auftraggeber gesondert in Rechnung gestellt.' },
          { p: '(3) Der Auftraggeber stellt sicher, dass er über alle erforderlichen Rechte an den zur Verfügung gestellten Materialien verfügt. Er stellt CrescentLabs von Ansprüchen Dritter frei, die aufgrund einer Verletzung dieser Pflicht entstehen.' },
        ],
      },
      {
        num: '§ 4',
        title: 'Vergütung und Zahlungsbedingungen',
        items: [
          { p: '(1) Die vereinbarte Vergütung ergibt sich aus dem jeweiligen Angebot. Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.' },
          {
            p: '(2) Es gelten folgende Zahlungsmodalitäten, sofern im Angebot nicht abweichend vereinbart:',
            list: [
              '50 % der Gesamtvergütung sind als Anzahlung vor Projektbeginn fällig.',
              '50 % der Gesamtvergütung sind bei Abnahme oder Übergabe des fertigen Werkes fällig.',
            ],
          },
          { p: '(3) Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zu begleichen, sofern nichts anderes schriftlich vereinbart wurde.' },
          { p: '(4) Bei Zahlungsverzug ist CrescentLabs berechtigt, Verzugszinsen in Höhe von 9 Prozentpunkten über dem jeweiligen Basiszinssatz (§ 288 Abs. 2 BGB) zu berechnen sowie eine Mahngebühr von 5,00 EUR pro Mahnung in Rechnung zu stellen.' },
          { p: '(5) CrescentLabs ist berechtigt, die Projektarbeiten bei Zahlungsverzug bis zur vollständigen Zahlung auszusetzen. Sich hieraus ergebende Verzögerungen gehen nicht zu Lasten von CrescentLabs.' },
          { p: '(6) Reisekosten, Drittanbieterkosten (z. B. Lizenzen, Hosting, App-Store-Gebühren) sowie sonstige Auslagen werden, sofern nicht im Angebot enthalten, gesondert nach Aufwand berechnet und bedürfen vorheriger Absprache.' },
        ],
      },
      {
        num: '§ 5',
        title: 'Änderungswünsche und Nachtragsangebote (Change Requests)',
        items: [
          { p: '(1) Der im Angebot definierte Leistungsumfang („Scope") ist verbindlich. Änderungen, Erweiterungen oder Abweichungen vom vereinbarten Leistungsumfang, die vom Auftraggeber gewünscht werden, bedürfen der schriftlichen Vereinbarung in Form eines Nachtragsangebots.' },
          { p: '(2) Wünscht der Auftraggeber während der Projektlaufzeit Änderungen am vereinbarten Leistungsumfang, teilt er dies CrescentLabs schriftlich mit. CrescentLabs prüft den Änderungswunsch und unterbreitet dem Auftraggeber innerhalb von 5 Werktagen ein entsprechendes Nachtragsangebot mit Angabe von Mehrkosten und etwaiger Auswirkungen auf den Projektzeitplan.' },
          { p: '(3) Änderungswünsche werden erst nach schriftlicher Annahme des Nachtragsangebots durch den Auftraggeber umgesetzt. Bis zur Einigung über einen Change Request führt CrescentLabs die bisherigen Leistungen gemäß dem ursprünglichen Leistungsumfang fort.' },
          { p: '(4) Mehraufwände, die durch Änderungswünsche des Auftraggebers entstehen und die den ursprünglich vereinbarten Umfang nicht wesentlich überschreiten (Bagatellfälle bis 1 Stunde Mehraufwand), können von CrescentLabs ohne gesondertes Nachtragsangebot durchgeführt und nach tatsächlichem Aufwand zum vereinbarten Stundensatz abgerechnet werden.' },
        ],
      },
      {
        num: '§ 6',
        title: 'Abnahme und Projektabschluss',
        items: [
          { p: '(1) Nach Fertigstellung der vereinbarten Leistung fordert CrescentLabs den Auftraggeber zur Abnahme auf. Der Auftraggeber ist verpflichtet, die Leistung innerhalb von 10 Werktagen nach Aufforderung zu prüfen und entweder abzunehmen oder konkrete Mängel schriftlich zu rügen.' },
          { p: '(2) Die Abnahme gilt als erteilt, wenn der Auftraggeber die Leistung in Betrieb nimmt oder nach Ablauf der Prüfungsfrist von 10 Werktagen keine schriftliche Mängelrüge eingeht.' },
          { p: '(3) Bei berechtigter Mängelrüge ist CrescentLabs berechtigt und verpflichtet, die gerügten Mängel innerhalb angemessener Frist zu beheben. Verweigert CrescentLabs die Nacherfüllung, schlägt sie fehl oder ist sie dem Auftraggeber nicht zumutbar, stehen dem Auftraggeber die gesetzlichen Gewährleistungsrechte zu.' },
        ],
      },
      {
        num: '§ 7',
        title: 'Urheberrecht und Nutzungsrechte',
        items: [
          { p: '(1) CrescentLabs behält an allen im Rahmen der Vertragserfüllung erstellten Werken (Quellcode, Designs, Konzepte, Grafiken etc.) das Urheberrecht.' },
          { p: '(2) Mit vollständiger Zahlung der vereinbarten Vergütung räumt CrescentLabs dem Auftraggeber ein einfaches, zeitlich und räumlich unbeschränktes Nutzungsrecht an den erstellten Werken für den vereinbarten Verwendungszweck ein. Die Übertragung dieses Nutzungsrechts auf Dritte bedarf der vorherigen schriftlichen Zustimmung von CrescentLabs.' },
          { p: '(3) CrescentLabs ist berechtigt, allgemeine Programmier- und Entwicklungskonzepte sowie wiederverwendbare Codekomponenten und Frameworks, die im Rahmen der Projektarbeit entwickelt wurden, auch für andere Projekte zu verwenden, sofern dadurch keine vertraulichen Informationen des Auftraggebers offenbart werden.' },
          { p: '(4) CrescentLabs ist berechtigt, das Projekt zu Referenz- und Werbezwecken in seinem Portfolio zu verwenden, sofern der Auftraggeber nicht ausdrücklich widerspricht.' },
          { p: '(5) Der Auftraggeber garantiert, dass alle von ihm zur Verfügung gestellten Materialien frei von Rechten Dritter sind. Er stellt CrescentLabs von sämtlichen Ansprüchen Dritter frei, die aus einer Verletzung von Urheberrechten oder sonstigen Schutzrechten entstehen.' },
        ],
      },
      {
        num: '§ 8',
        title: 'Vertraulichkeit',
        items: [
          { p: '(1) Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten vertraulichen Informationen der jeweils anderen Partei streng vertraulich zu behandeln, nicht an Dritte weiterzugeben und nur zur Erfüllung des Vertragszwecks zu verwenden.' },
          { p: '(2) Als vertraulich gelten insbesondere Geschäfts- und Betriebsgeheimnisse, technische Informationen, Kundendaten sowie sonstige nicht öffentlich zugängliche Informationen.' },
          { p: '(3) Die Vertraulichkeitspflicht gilt nicht für Informationen, die öffentlich zugänglich sind oder ohne Verletzung dieser Pflicht öffentlich bekannt werden, die dem Empfänger bereits vor Vertragsschluss bekannt waren oder die der Empfänger rechtmäßig von Dritten erhalten hat.' },
          { p: '(4) Die Vertraulichkeitspflicht besteht über das Ende des Vertragsverhältnisses für einen Zeitraum von 3 Jahren fort.' },
        ],
      },
      {
        num: '§ 9',
        title: 'Haftungsbeschränkung',
        items: [
          { p: '(1) CrescentLabs haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für vorsätzlich oder grob fahrlässig verursachte Schäden und im Rahmen einer übernommenen Garantie.' },
          { p: '(2) Für leicht fahrlässig verursachte Schäden haftet CrescentLabs nur, sofern eine Pflicht verletzt wurde, deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglicht und auf deren Einhaltung der Auftraggeber regelmäßig vertrauen darf (Kardinalpflicht). In diesen Fällen ist die Haftung der Höhe nach auf den typischerweise vorhersehbaren Schaden begrenzt und beträgt maximal den Nettowert des jeweiligen Auftragswertes.' },
          { p: '(3) Im Übrigen ist die Haftung von CrescentLabs für leicht fahrlässig verursachte Schäden ausgeschlossen.' },
          {
            p: '(4) CrescentLabs haftet nicht für Schäden, die entstehen durch:',
            list: [
              'fehlerhafte oder unvollständige Informationen und Materialien des Auftraggebers',
              'Änderungen am System durch den Auftraggeber oder Dritte nach Übergabe',
              'Ausfälle von Drittanbieterdiensten (Hosting, App Stores, APIs)',
              'höhere Gewalt',
            ],
          },
          { p: '(5) Die vorstehenden Haftungsregelungen gelten auch zugunsten der Mitarbeiter, Erfüllungs- und Verrichtungsgehilfen von CrescentLabs.' },
        ],
      },
      {
        num: '§ 10',
        title: 'Kündigung und Projektabbruch',
        items: [
          { p: '(1) Beide Parteien können den Vertrag aus wichtigem Grund außerordentlich kündigen.' },
          { p: '(2) Wird das Projekt auf Wunsch des Auftraggebers vorzeitig beendet, hat CrescentLabs Anspruch auf Vergütung der bis dahin erbrachten Leistungen nach tatsächlichem Aufwand. Bereits gezahlte Anzahlungen werden verrechnet; übersteigen die geleisteten Arbeiten die Anzahlung, ist die Differenz sofort fällig.' },
          { p: '(3) Im Falle einer außerordentlichen Kündigung durch CrescentLabs aus wichtigem Grund, der in der Sphäre des Auftraggebers liegt, gilt Abs. 2 entsprechend.' },
        ],
      },
      {
        num: '§ 11',
        title: 'Ausschluss des Widerrufsrechts',
        items: [
          { p: 'Da es sich bei CrescentLabs ausschließlich um B2B-Dienstleistungen handelt und Auftraggeber im Sinne dieser AGB ausnahmslos Unternehmer gemäß § 14 BGB sind, steht kein gesetzliches Widerrufsrecht zu. Dies wird mit Vertragsschluss ausdrücklich bestätigt.' },
        ],
      },
      {
        num: '§ 12',
        title: 'Datenschutz',
        items: [
          { p: '(1) CrescentLabs verarbeitet personenbezogene Daten des Auftraggebers und seiner Mitarbeiter ausschließlich im Rahmen der Vertragserfüllung und in Übereinstimmung mit der Datenschutz-Grundverordnung (DSGVO) sowie dem Bundesdatenschutzgesetz (BDSG).' },
          { p: '(2) Näheres zur Verarbeitung personenbezogener Daten ergibt sich aus der Datenschutzerklärung von CrescentLabs, die auf der Website abrufbar ist. Soweit CrescentLabs im Auftrag des Auftraggebers personenbezogene Daten verarbeitet, ist ein gesonderter Auftragsverarbeitungsvertrag (AVV) abzuschließen.' },
        ],
      },
      {
        num: '§ 13',
        title: 'Schlussbestimmungen',
        items: [
          { p: '(1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).' },
          { p: '(2) Erfüllungsort und ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist der Sitz von CrescentLabs (Müllheim, Baden-Württemberg), soweit der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.' },
          { p: '(3) Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, berührt dies die Wirksamkeit der übrigen Bestimmungen nicht. Die unwirksame Bestimmung ist durch eine wirksame zu ersetzen, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.' },
          { p: '(4) Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt auch für die Abbedingung des Schriftformerfordernisses selbst.' },
          { p: '(5) CrescentLabs behält sich das Recht vor, diese AGB mit angemessener Ankündigungsfrist zu ändern. Für bereits geschlossene Verträge gelten die zum Zeitpunkt des Vertragsschlusses gültigen AGB.' },
        ],
      },
    ],
  },

  en: {
    title: 'General Terms & Conditions',
    subtitle: 'CrescentLabs UG (haftungsbeschränkt) · As of: February 2026',
    sections: [
      {
        num: '§ 1',
        title: 'Scope and Contracting Parties',
        items: [
          { p: '(1) These General Terms and Conditions ("GTC") of CrescentLabs UG (haftungsbeschränkt), Müllheim, Germany (hereinafter "CrescentLabs" or "Contractor") apply to all contracts for the provision of services, in particular web design, website creation and iOS app development, concluded by CrescentLabs with entrepreneurs within the meaning of § 14 of the German Civil Code (BGB).' },
          { p: '(2) An entrepreneur within the meaning of these GTC is any natural or legal person or legally capable partnership that, at the time of entering into a legal transaction, is acting in the exercise of its commercial or independent professional activity.' },
          { p: '(3) These GTC apply exclusively. Deviating, conflicting or supplementary general terms and conditions of the client shall only become part of the contract if and to the extent that CrescentLabs has expressly agreed to their application in writing.' },
          { p: '(4) Individually agreed arrangements with the client (including ancillary agreements, additions and amendments) shall in all cases take precedence over these GTC.' },
        ],
      },
      {
        num: '§ 2',
        title: 'Formation of Contract and Offers',
        items: [
          { p: '(1) Offers by CrescentLabs are non-binding and subject to change, unless expressly marked as binding. An offer is generally valid for 30 calendar days from the date of issue.' },
          { p: '(2) The contract is formed by the client\'s written or electronic placement of an order and its written or electronic confirmation by CrescentLabs. Electronic form (email) is equivalent to written form unless otherwise agreed.' },
          { p: '(3) The scope of services is determined by the respective offer or project description. Verbal agreements require written confirmation by CrescentLabs to be effective.' },
        ],
      },
      {
        num: '§ 3',
        title: 'Client\'s Cooperation Obligations',
        items: [
          {
            p: '(1) The client is obliged to provide CrescentLabs with all information, materials, access credentials and approvals necessary for the performance of services in a timely and complete manner. This includes in particular:',
            list: [
              'Texts, images, logos and other content in usable digital form',
              'Access credentials to existing systems (e.g. server, CMS, App Store Connect)',
              'Approvals and feedback within agreed deadlines',
              'Designation of a responsible contact person on the client\'s side',
            ],
          },
          { p: '(2) Delays arising from the client\'s failure to provide materials in a timely or complete manner shall not be attributed to CrescentLabs. Additional expenditure resulting therefrom will be charged to the client separately.' },
          { p: '(3) The client ensures that it holds all necessary rights to the materials provided. The client shall indemnify CrescentLabs against claims by third parties arising from a breach of this obligation.' },
        ],
      },
      {
        num: '§ 4',
        title: 'Remuneration and Payment Terms',
        items: [
          { p: '(1) The agreed remuneration is set out in the respective offer. All prices are exclusive of applicable VAT.' },
          {
            p: '(2) The following payment terms apply unless otherwise agreed in the offer:',
            list: [
              '50% of the total remuneration is due as a deposit prior to project commencement.',
              '50% of the total remuneration is due upon acceptance or delivery of the completed work.',
            ],
          },
          { p: '(3) Invoices are to be settled within 14 days of the invoice date without deduction, unless otherwise agreed in writing.' },
          { p: '(4) In the event of late payment, CrescentLabs is entitled to charge default interest at a rate of 9 percentage points above the respective base interest rate (§ 288 para. 2 BGB) and a reminder fee of €5.00 per reminder.' },
          { p: '(5) CrescentLabs is entitled to suspend project work in the event of late payment until full payment has been received. Resulting delays shall not be attributed to CrescentLabs.' },
          { p: '(6) Travel expenses, third-party costs (e.g. licences, hosting, app store fees) and other disbursements, unless included in the offer, will be charged separately on a time-and-materials basis and require prior agreement.' },
        ],
      },
      {
        num: '§ 5',
        title: 'Change Requests',
        items: [
          { p: '(1) The scope of services defined in the offer ("Scope") is binding. Changes, extensions or deviations from the agreed scope of services requested by the client require written agreement in the form of a change order.' },
          { p: '(2) If the client wishes to make changes to the agreed scope of services during the project, it shall notify CrescentLabs in writing. CrescentLabs will review the change request and submit a corresponding change order to the client within 5 business days, indicating additional costs and any effects on the project timeline.' },
          { p: '(3) Change requests will only be implemented after the client\'s written acceptance of the change order. Until agreement on a change request, CrescentLabs will continue the existing services in accordance with the original scope.' },
          { p: '(4) Additional expenditure arising from client change requests that do not significantly exceed the originally agreed scope (minor cases up to 1 hour of additional effort) may be carried out by CrescentLabs without a separate change order and invoiced at the agreed hourly rate.' },
        ],
      },
      {
        num: '§ 6',
        title: 'Acceptance and Project Completion',
        items: [
          { p: '(1) Upon completion of the agreed services, CrescentLabs will request the client\'s acceptance. The client is obliged to review the services within 10 business days of the request and either accept them or report specific defects in writing.' },
          { p: '(2) Acceptance is deemed to have been granted if the client puts the service into operation or if no written notice of defects is received within the 10-business-day review period.' },
          { p: '(3) In the event of a justified notice of defects, CrescentLabs is entitled and obliged to remedy the defects within a reasonable period. If CrescentLabs refuses to remedy the defects, remediation fails or is unreasonable for the client, the client shall have the statutory warranty rights.' },
        ],
      },
      {
        num: '§ 7',
        title: 'Copyright and Rights of Use',
        items: [
          { p: '(1) CrescentLabs retains copyright in all works created in the course of performing the contract (source code, designs, concepts, graphics, etc.).' },
          { p: '(2) Upon full payment of the agreed remuneration, CrescentLabs grants the client a non-exclusive, temporally and geographically unlimited licence to use the created works for the agreed purpose. Transfer of this licence to third parties requires prior written consent from CrescentLabs.' },
          { p: '(3) CrescentLabs is entitled to use general programming and development concepts as well as reusable code components and frameworks developed during the project for other projects, provided that no confidential information of the client is disclosed.' },
          { p: '(4) CrescentLabs is entitled to use the project for reference and promotional purposes in its portfolio, unless the client expressly objects.' },
          { p: '(5) The client warrants that all materials provided are free from third-party rights. The client shall indemnify CrescentLabs against all claims by third parties arising from an infringement of copyrights or other intellectual property rights.' },
        ],
      },
      {
        num: '§ 8',
        title: 'Confidentiality',
        items: [
          { p: '(1) Both parties undertake to treat all confidential information of the other party obtained in the course of the collaboration as strictly confidential, not to disclose it to third parties and to use it only for the fulfilment of the contractual purpose.' },
          { p: '(2) Confidential information includes in particular trade and business secrets, technical information, customer data and other information not publicly accessible.' },
          { p: '(3) The confidentiality obligation does not apply to information that is or becomes publicly available without breach of this obligation, was already known to the recipient prior to entering into the contract, or was lawfully received from third parties.' },
          { p: '(4) The confidentiality obligation shall continue for a period of 3 years after the end of the contractual relationship.' },
        ],
      },
      {
        num: '§ 9',
        title: 'Limitation of Liability',
        items: [
          { p: '(1) CrescentLabs is liable without limitation for damages resulting from injury to life, limb or health, for intentional or grossly negligent damage, and under any guarantee assumed.' },
          { p: '(2) For damages caused by ordinary negligence, CrescentLabs is only liable if an obligation has been breached whose fulfilment is essential to the proper performance of the contract and upon whose compliance the client may regularly rely (cardinal obligation). In such cases, liability is limited to the amount of typically foreseeable damage and shall not exceed the net value of the respective order.' },
          { p: '(3) Otherwise, CrescentLabs\' liability for ordinarily negligent damage is excluded.' },
          {
            p: '(4) CrescentLabs is not liable for damages arising from:',
            list: [
              'incorrect or incomplete information and materials provided by the client',
              'changes made to the system by the client or third parties after handover',
              'failures of third-party services (hosting, app stores, APIs)',
              'force majeure',
            ],
          },
          { p: '(5) The above liability provisions also apply in favour of CrescentLabs\' employees, agents and vicarious agents.' },
        ],
      },
      {
        num: '§ 10',
        title: 'Termination and Project Cancellation',
        items: [
          { p: '(1) Either party may terminate the contract for good cause with immediate effect.' },
          { p: '(2) If the project is terminated early at the client\'s request, CrescentLabs is entitled to remuneration for services rendered up to that point on a time-and-materials basis. Deposits already paid will be credited; if the work performed exceeds the deposit, the difference shall be due immediately.' },
          { p: '(3) In the event of extraordinary termination by CrescentLabs for good cause attributable to the client\'s sphere, paragraph 2 applies accordingly.' },
        ],
      },
      {
        num: '§ 11',
        title: 'Exclusion of Right of Withdrawal',
        items: [
          { p: 'Since CrescentLabs provides exclusively B2B services and clients under these GTC are without exception entrepreneurs within the meaning of § 14 BGB, no statutory right of withdrawal applies. This is expressly confirmed upon conclusion of the contract.' },
        ],
      },
      {
        num: '§ 12',
        title: 'Data Protection',
        items: [
          { p: '(1) CrescentLabs processes personal data of the client and its employees exclusively for the purpose of contract performance and in compliance with the General Data Protection Regulation (GDPR) and the Federal Data Protection Act (BDSG).' },
          { p: '(2) Further details on the processing of personal data are set out in CrescentLabs\' privacy policy, available on the website. Insofar as CrescentLabs processes personal data on behalf of the client, a separate Data Processing Agreement (DPA) is to be concluded.' },
        ],
      },
      {
        num: '§ 13',
        title: 'Final Provisions',
        items: [
          { p: '(1) The law of the Federal Republic of Germany applies, excluding the UN Convention on Contracts for the International Sale of Goods (CISG).' },
          { p: '(2) The place of performance and exclusive place of jurisdiction for all disputes arising from or in connection with this contract is the registered office of CrescentLabs (Müllheim, Baden-Württemberg), provided that the client is a merchant, a legal entity under public law or a special fund under public law.' },
          { p: '(3) Should any provision of these GTC be wholly or partially invalid or become invalid, this shall not affect the validity of the remaining provisions. The invalid provision shall be replaced by a valid provision that most closely approximates the economic purpose of the invalid provision.' },
          { p: '(4) Amendments and supplements to these GTC require written form. This also applies to the waiver of the written form requirement itself.' },
          { p: '(5) CrescentLabs reserves the right to amend these GTC with reasonable notice. For contracts already concluded, the GTC valid at the time of conclusion of the contract shall apply.' },
        ],
      },
    ],
  },
}

export default function TermsPage() {
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
                <h2 className="text-base font-semibold text-white">
                  {section.title}
                </h2>
              </div>

              {/* Section content */}
              <div className="pl-11 space-y-4">
                {section.items.map((item, i) => (
                  <div key={i}>
                    <p className="text-white/70 text-[0.9375rem] leading-[1.8]">{item.p}</p>
                    {item.list && (
                      <ul className="mt-2 space-y-1.5 pl-4">
                        {item.list.map((li, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-white/70 text-[0.9375rem] leading-[1.8]">
                            <span className="mt-[0.6em] w-1 h-1 rounded-full bg-white/25 flex-shrink-0" />
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </main>

      <Footer variant="dark" />
    </div>
  )
}
