'use client'

import { useState, useEffect, useRef } from 'react'
import { cn } from "@/lib/utils"
import HeaderSection from '@/components/HeaderSection'

const sections = [
    {
      id: 'definition',
      title: 'Definition',
      content: `
  “Personal Data” refers to any information that can be used to identify an individual directly or indirectly. This includes, but is not limited to, details such as your name, email address, physical address, telephone number, online identifiers like an IP address or cookies, and any unique identifier associated with your device or browsing habits. When we speak of Personal Data in this Privacy Policy, we also include related data that could be combined to identify you, such as geolocation information, device information, and other metadata.
  
  The concept of Personal Data is broad and continues to evolve, especially as technology advances. In many jurisdictions, there is a distinction between personal data and “sensitive” personal data. Sensitive personal data may include information about your racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic data, biometric data (where used to uniquely identify someone), and data concerning health or a person’s sex life or sexual orientation. Processing this type of data often requires enhanced measures of protection and additional legal bases under applicable laws, such as the General Data Protection Regulation (GDPR) in the European Union.
  
  Under GDPR and other data protection laws, data subjects are individuals to whom personal data relates. These data subjects have specific rights regarding how their data is collected, processed, stored, and transferred. Data controllers are the entities that determine the purpose and means of processing personal data. Data processors, on the other hand, act on behalf of the data controllers and follow their instructions. Depending on your relationship with us, we may act as either a data controller or a data processor.
  
  In this Privacy Policy, references to “we,” “us,” or “our” refer to Lazarev. Agency, which is the party responsible for determining why and how Personal Data is processed. Where local data protection laws apply, we adhere to those regulations diligently. We believe that clarity in definitions is fundamental to ensuring that our users understand the scope and implications of data protection, as well as their own rights. In the digital age, Personal Data goes beyond traditional identifiers such as your name or address. Even data that may initially seem non-personal—like your browser type, session duration, or device model—can be combined to form a profile about you. Consequently, we treat all such data with due care.
  
  Moreover, we recognize that data may be stored or transferred across multiple jurisdictions, which might apply different data protection standards. We work to ensure appropriate safeguards, such as contractual clauses or technical protections like encryption, are in place to maintain compliance and protect user rights. By “appropriate safeguards,” we mean measures like the EU Standard Contractual Clauses, certifications under privacy frameworks (e.g., the EU-U.S. Data Privacy Framework), and robust data-processing agreements with vendors and partners.
  
  In summary, “Personal Data” in the context of this Policy is a broad term encompassing any piece of information that identifies, relates to, describes, or can be associated with you as an individual, whether directly or in combination with other data. We encourage you to read this Policy carefully to fully understand how we manage your Personal Data throughout your interactions with Lazarev. Agency.
      `.trim()
    },
    {
      id: 'about',
      title: 'About British Academy',
      content: `
  Lazarev. Agency is a digital design and user experience firm that specializes in crafting intuitive and innovative solutions for clients around the world. Established with the vision of transforming complex business ideas into compelling digital products, we pride ourselves on maintaining a steadfast commitment to user-centric design principles, data protection, and privacy. From our headquarters, we collaborate with a global network of clients, helping them navigate the digital landscape while aligning with various international regulatory standards.
  
  Our team is composed of experts in fields such as user interface design, user experience research, brand strategy, and digital product development. This interdisciplinary approach allows us to tackle projects from multiple perspectives, ensuring that every aspect of a product aligns with best practices for both functionality and security. We believe that high-quality design should never come at the expense of privacy or compliance. Consequently, we integrate data protection strategies from the very beginning of each project, conducting thorough risk assessments and embedding privacy-by-design principles into our workflows.
  
  Beyond client projects, Lazarev. Agency invests heavily in research and development to stay on the cutting edge of design trends and privacy requirements. We regularly attend and speak at international conferences, publish thought leadership articles, and collaborate with academic institutions. This dedication helps us remain agile in a rapidly changing technological environment, where new tools and regulations can emerge at any time. By keeping a pulse on global developments, we are better equipped to offer sustainable solutions that respect user privacy and meet or exceed legal obligations.
  
  We also strive to foster an internal culture that respects individual autonomy and values transparency. Employees undergo regular training on data protection laws, ethical considerations, and cybersecurity best practices. Our internal policies are designed to ensure that every team member handles data responsibly, whether it belongs to our own company or to our clients. This includes securing all devices used for work, using encrypted communication channels, and following role-based access protocols to minimize the risk of unauthorized data access.
  
  When you engage with Lazarev. Agency, you are partnering with an organization that understands the value of trust. We recognize that users place a great deal of confidence in our ability to protect their Personal Data, and we work diligently to honor that trust at every step. Whether we’re designing a new mobile application, revamping a website, or consulting on user experience strategy, our ultimate goal is to balance creativity, usability, and robust privacy safeguards.
  
  In summary, Lazarev. Agency is not just about designing beautiful interfaces—we are about building responsible and ethical digital experiences. From initial concept to final delivery, we keep privacy and data protection at the forefront of our processes. Our holistic approach ensures that we offer more than just a service; we provide peace of mind that your data, and the data of your users, is treated with the utmost care and respect.
      `.trim()
    },
    {
      id: 'rights',
      title: "User's rights",
      content: `
  Individuals have a range of rights under data protection laws, particularly in jurisdictions governed by regulations such as the General Data Protection Regulation (GDPR) in the European Union, the California Consumer Privacy Act (CCPA) in the United States, and similar frameworks elsewhere. Understanding these rights is crucial for exercising control over how your Personal Data is used, stored, and shared. Below, we outline the most common rights and how Lazarev. Agency supports them.
  
  **Right of Access**: You have the right to obtain confirmation from us as to whether or not Personal Data concerning you is being processed, and if so, to request access to the Personal Data. This access includes information about the purpose of processing, the categories of data processed, the recipients of that data, and the envisaged retention period. We aim to provide this information in a concise, transparent, and intelligible format.
  
  **Right to Rectification**: If you believe that your Personal Data is inaccurate or incomplete, you can request that we correct or complete it. Depending on the nature of the data, we may require documentation or additional information to verify and implement your request. Ensuring the accuracy of your Personal Data helps us provide better services and comply with legal obligations.
  
  **Right to Erasure (“Right to be Forgotten”)**: Under certain circumstances, you can request the deletion of your Personal Data. These circumstances might include situations where the data is no longer necessary for the purposes it was originally collected, where you have withdrawn consent (and no other legal basis for processing applies), or where the data has been unlawfully processed. We will consider and respond to your request in accordance with applicable laws, balancing your request against any legal obligations or legitimate interests that may require retaining the data.
  
  **Right to Restrict Processing**: You have the right to restrict our processing of your Personal Data if you contest its accuracy, the lawfulness of processing, or if you have objected to processing pending verification of whether our legitimate grounds override your rights. While processing is restricted, we may still store your data, but we will not process it further unless you give us consent or it is necessary for legal claims.
  
  **Right to Data Portability**: Where processing is based on your consent or a contract, and is carried out by automated means, you can request to receive the Personal Data we hold about you in a commonly used, machine-readable format. You can also request that we transmit this data directly to another controller when technically feasible. This right supports the free flow of information and gives you greater control over your data.
  
  **Right to Object**: If your Personal Data is processed based on our legitimate interests, you have the right to object to such processing. We will then cease processing unless we can demonstrate compelling legitimate grounds for the processing that override your interests, rights, and freedoms, or unless the processing is for the establishment, exercise, or defense of legal claims.
  
  In addition to the rights mentioned above, you also have the right to lodge a complaint with a supervisory authority if you believe your data protection rights have been infringed. At Lazarev. Agency, we are committed to safeguarding these rights. If you wish to exercise any of them, you can do so by contacting our Data Protection Officer or designated privacy contact point. We will respond to your request as promptly as possible, in line with applicable legal deadlines.
      `.trim()
    },
    {
      id: 'data-collect',
      title: 'Data We collect',
      content: `
  At Lazarev. Agency, we take a layered approach to data collection, ensuring that we gather only what is necessary for legitimate business and operational purposes. Our objective is to minimize the collection of Personal Data while providing high-quality services that meet the needs of our users and clients. Below, we detail the categories of data we may collect, along with the reasons for such collection.
  
  1. **Identification Data**: This category includes information like your name, username, date of birth, and in some cases, government-issued identifiers for verification purposes. We request this data to verify your identity, to create and maintain user accounts, and to comply with legal obligations, such as anti-fraud or anti-money laundering requirements in certain jurisdictions.
  
  2. **Contact Data**: We may collect your email address, phone number, and mailing address to provide customer service, fulfill orders, or send important notifications. For instance, if we launch a new feature that requires user action, we may send you an email alert. Keeping your contact information current allows us to communicate effectively and keep you informed of changes to our services or terms.
  
  3. **Technical Data**: When you interact with our digital platforms, we collect information such as IP addresses, browser types, device identifiers, and operating systems. We use this data to maintain the security and functionality of our website, perform analytics to improve user experience, and detect or prevent fraudulent activities. Cookies and similar technologies also fall under this category, enabling us to remember user preferences and provide a more personalized experience.
  
  4. **Usage Data**: This includes your browsing behavior on our website, such as pages visited, time spent on each page, and the links clicked. We employ this data to better understand how our users engage with our products and services, ultimately improving content layout and navigation. We may use first- and third-party analytics tools to generate aggregated reports that offer insights without identifying individual users.
  
  5. **Financial Data**: In cases where we handle financial transactions directly, we may collect payment details, including credit card information or bank account numbers. This data is processed securely in compliance with applicable industry standards (e.g., PCI-DSS). If we utilize third-party payment processors, these entities also follow stringent data protection protocols and contractual obligations.
  
  6. **Marketing and Communication Preferences**: If you subscribe to our newsletters or agree to receive promotional materials, we store information about your communication preferences. This enables us to tailor our updates and outreach to your interests, ensuring relevance and avoiding spam.
  
  We may combine or link different categories of data to offer more personalized services or to ensure consistency across various channels. However, any such combination is conducted in compliance with relevant data protection laws and best practices. We also conduct periodic reviews to determine if specific data is still necessary or if it can be securely deleted or anonymized.
  
  By understanding the scope of data we collect and the purposes for which we use it, you can make more informed decisions about how to interact with our services. Should you have any questions or concerns about our data collection methods, you are encouraged to contact us directly so we can clarify our practices and, where applicable, adjust the data we collect based on your preferences.
      `.trim()
    },
    {
      id: 'legal',
      title: 'Legal ground and goals',
      content: `
  In accordance with various data protection regulations, including the General Data Protection Regulation (GDPR), Lazarev. Agency relies on specific legal bases to process your Personal Data. Understanding these legal grounds is critical because it clarifies our responsibilities and the rights you can exercise. Below is an overview of the primary legal bases we employ, alongside the objectives we aim to achieve with each.
  
  1. **Consent**: In situations where we do not have another valid legal basis for processing, we may request your explicit, informed consent. Consent could be sought, for example, to send you direct marketing communications or to process sensitive personal data. When we rely on consent, we ensure that you have the ability to withdraw it at any time without affecting the lawfulness of any processing performed prior to your withdrawal. If you decide to withdraw consent, we will promptly cease the corresponding data processing activities, unless another legal basis applies.
  
  2. **Contractual Necessity**: We process your Personal Data when it is necessary for the performance of a contract to which you are a party, or to take steps at your request before entering into such a contract. For example, if you engage Lazarev. Agency to design a digital platform, we may need to process your name, contact information, and billing details to fulfill our obligations. Without this data, we cannot provide the agreed-upon services or maintain our commitments to you.
  
  3. **Legal Obligation**: Certain processing activities are required to comply with statutory or regulatory obligations. For instance, we may retain transactional records to comply with tax and accounting requirements or share specific data with law enforcement in response to a valid request. These obligations vary by jurisdiction and may include local privacy regulations, industry-specific mandates, and global frameworks.
  
  4. **Legitimate Interests**: In some cases, we process Personal Data based on our legitimate interests, provided these interests are not overridden by your fundamental rights or freedoms. Legitimate interests can include improving the security and performance of our services, preventing fraud, analyzing website analytics to enhance user experience, or marketing our own products and services to existing customers. When relying on this basis, we carefully evaluate potential risks to your rights and implement safeguards to mitigate them.
  
  5. **Vital Interests**: In rare circumstances, we may process Personal Data to protect the vital interests of an individual. This usually applies in emergency scenarios where the data subject’s life or physical well-being is at stake. While this basis is less common in our typical operations, we note it here for completeness.
  
  Across these legal grounds, our key goals remain consistent: to provide exceptional service, maintain transparency, uphold compliance with legal obligations, and respect the privacy rights of our users. We periodically review our data processing activities to ensure they align with the stated legal bases and the principles of data minimization, purpose limitation, and storage limitation. Where we identify any activities that no longer serve a legitimate or lawful purpose, we either stop processing or anonymize the data.
  
  If you have questions about our legal bases for processing or believe that we are processing your data in a way that does not align with these bases, we encourage you to contact us. We will address your concerns and, where applicable, adjust our practices to remain fully compliant with the relevant data protection laws.
      `.trim()
    },
    {
      id: 'storage',
      title: 'Terms of Data storage',
      content: `
  Data storage is a critical component of data protection. At Lazarev. Agency, we employ a comprehensive storage strategy that prioritizes security, redundancy, and compliance with applicable data retention periods. Our approach is informed by legal obligations under various jurisdictions, as well as industry best practices for cybersecurity. Below, we detail some of the key elements involved in our data storage protocols.
  
  **Storage Duration**: Personal Data is not stored indefinitely. We adhere to the principle of storage limitation, meaning that we only keep your data for as long as it is necessary to fulfill the purpose for which it was collected or to comply with legal, regulatory, or contractual requirements. For instance, we might retain financial records for tax and audit purposes for a legally mandated period, after which such records are deleted or anonymized. Similarly, project-related data is retained until the conclusion of a client engagement, plus any additional time frame required by law or contract.
  
  **Secure Infrastructure**: We utilize a combination of on-premises servers, cloud-based solutions, and hybrid storage environments, depending on the nature and sensitivity of the data. Our cloud providers are vetted for robust security measures, including encryption at rest and in transit, secure authentication mechanisms, and physical data center security. Whether data is stored onsite or in the cloud, we implement firewalls, intrusion detection systems, and other cybersecurity tools to minimize the risk of unauthorized access.
  
  **Encryption and Access Controls**: All stored data, wherever technically feasible, is protected with encryption. Encryption keys are managed following strict protocols to prevent misuse or accidental exposure. Access to stored data is on a need-to-know basis, meaning that only authorized personnel with a legitimate operational need can access the data. We use role-based access control (RBAC) systems to ensure that employees can only view or manipulate data pertinent to their roles, thereby limiting the scope of potential internal threats.
  
  **Geographical Considerations**: Our global footprint sometimes necessitates the transfer and storage of Personal Data across different countries. When such transfers occur, we adhere to international data transfer mechanisms recognized by relevant authorities, such as the European Commission or other local regulatory bodies. These mechanisms can include Standard Contractual Clauses (SCCs), the EU-U.S. Data Privacy Framework, and other legally approved measures. Our aim is to maintain the same level of data protection regardless of the data’s physical location.
  
  **Regular Audits and Reviews**: We conduct periodic audits of our data storage systems and practices to ensure ongoing compliance with internal policies and external regulations. These audits help us identify potential weaknesses, update our technologies, and refine our processes. Where we discover discrepancies or areas for improvement, we take corrective action promptly, which may involve updating software, revising policies, or enhancing staff training.
  
  **Secure Deletion**: When data is no longer needed, we ensure it is securely deleted or anonymized. Secure deletion methods involve overwriting data multiple times or employing cryptographic erasure, making it irrecoverable. Anonymization techniques, used in certain scenarios, remove or replace personal identifiers such that the data can no longer be used to identify an individual.
  
  By adhering to these principles, Lazarev. Agency strives to balance operational efficiency with rigorous data protection. We recognize that proper data storage is an ongoing endeavor, requiring continual assessment and adaptation to evolving technological and regulatory landscapes. Should you have any questions about how long we keep your Personal Data or how it is stored, please feel free to contact us for more information.
      `.trim()
    },
    {
      id: 'process',
      title: 'How We process Your Data',
      content: `
  Our data processing activities at Lazarev. Agency are multifaceted, reflecting the diverse nature of our services. We take seriously the responsibility of handling your Personal Data with care, transparency, and in accordance with legal obligations. Below, we offer an overview of the methods and tools we use to collect, analyze, and manage data.
  
  **1. Data Collection Methods**: We collect data through multiple channels. When you visit our website, we automatically gather certain technical information such as IP addresses, device types, and browsing behavior using cookies and similar technologies. If you register for an account or subscribe to our newsletters, we collect identification and contact details through online forms. We also receive data via email or telephone when you communicate with our customer support or sales teams. In each case, we endeavor to use the least intrusive method possible while ensuring we have sufficient information to fulfill your request or provide a service.
  
  **2. Data Analysis and Reporting**: Once data is collected, we may use analytics tools—both in-house and third-party—to understand usage patterns, user preferences, and overall engagement with our platforms. By aggregating and anonymizing these data points, we can gain insights without jeopardizing individual privacy. These insights inform strategic decisions, such as improving website navigation, optimizing performance, or tailoring our marketing campaigns.
  
  **3. Automated Decision-Making**: In some instances, we employ automated decision-making processes, particularly in areas like risk assessment, credit checks, or fraud detection. For example, if a user attempts multiple failed login attempts, an automated system might temporarily lock the account to protect against unauthorized access. When such automation has legal or similarly significant effects, we comply with relevant legal requirements, which may include offering you the right to request human intervention or to contest the decision.
  
  **4. Collaboration with Third Parties**: To deliver our services efficiently, we may share Personal Data with vetted third parties such as cloud service providers, payment processors, or consultants. Each of these partners is required to follow strict data protection agreements that define the scope and purpose of their data usage. For instance, a payment processor may collect and store your credit card information solely for transaction purposes, without any rights to use it for marketing or other reasons. We also require service providers to implement robust security measures, including encryption and secure authentication protocols.
  
  **5. Data Security Measures**: Throughout our processing activities, we incorporate multiple layers of security. Encryption, tokenization, and anonymization tools are used where appropriate to ensure that personal identifiers are either masked or removed from data sets. Access to sensitive data is restricted using role-based permissions, and all employees undergo regular training on data protection best practices. We also employ monitoring tools to detect any anomalies or unauthorized activities, allowing us to respond promptly.
  
  **6. Transparency and Accountability**: We maintain detailed logs of our data processing activities, which outline when and how specific data sets are accessed or used. This logging system aids in meeting regulatory requirements and demonstrates our accountability. If a data breach or other incident occurs, we follow a strict internal procedure that includes notifying affected users and relevant authorities in line with statutory timelines.
  
  In summary, the ways in which we process your data are guided by our core principles of necessity, minimization, security, and transparency. Whether we are designing a user interface, conducting a marketing campaign, or analyzing performance metrics, we make every effort to incorporate privacy by design. If you have further questions about our processing techniques or technologies, please reach out to us so we can clarify any uncertainties.
      `.trim()
    },
    {
      id: 'controller',
      title: 'Change of the Controller',
      content: `
  A “Data Controller” is the entity that determines the purposes and means of processing Personal Data. At Lazarev. Agency, we currently serve as the primary Data Controller for the majority of user and client data we handle. However, in certain cases—such as collaborative projects with partner organizations—we may share or even transfer these responsibilities under specific legal agreements. This section explains circumstances under which the Data Controller role might change, as well as the implications for your Personal Data.
  
  **Mergers and Acquisitions**: In the event that Lazarev. Agency merges with or is acquired by another company, control of our data assets, including Personal Data, may be transferred to the new entity. If this occurs, we will provide clear and timely notifications to all affected individuals. We will also ensure that any successor entity agrees to abide by data protection standards that are at least as stringent as those currently in place. Should you not agree to the new entity’s data practices, you may have the right to request deletion or transfer of your Personal Data, as permitted by applicable law.
  
  **Partnerships and Joint Ventures**: We sometimes enter into partnerships or joint ventures to offer specialized services. In these arrangements, data control might be shared or split between Lazarev. Agency and our partners, depending on the contractual terms. For instance, if we jointly develop a new platform with another design agency, we may collectively determine how user data is collected and used. Regardless of the structure, we clearly outline the roles and responsibilities in a data processing agreement. If the partnership ends, we will determine whether data remains under our control, is transferred, or is deleted, always adhering to relevant regulations.
  
  **Internal Restructuring**: Internal reorganizations—such as spinning off a business unit or creating a new subsidiary—can also affect the entity serving as Data Controller. In such cases, the newly formed unit or subsidiary may become the Data Controller for data processed in connection with its operations. Our overarching corporate policies, however, continue to guide data protection practices, ensuring consistency in how user data is managed across the organization.
  
  **User Communications and Notifications**: If a significant change of Controller is planned or anticipated, we will make every effort to inform you through multiple channels, which may include email notifications, on-site messages, or official announcements on our website. We believe in transparency and recognize that changes in data control can be unsettling if not properly communicated. If you have questions or concerns about how such changes may affect your Personal Data, we encourage you to contact us.
  
  **Ongoing Obligations**: Even if data control transfers to another entity, we remain committed to ensuring that your rights are respected and that robust security measures are in place. We work closely with any new controller or partner to ensure that they adopt privacy practices consistent with legal obligations and industry standards. Additionally, we maintain the relevant records to demonstrate compliance with the principle of accountability laid out in various data protection regulations.
  
  By detailing these scenarios, we aim to keep you informed about the potential trajectories of your Personal Data. Our core mission remains the same: to safeguard user information and maintain trust. Any change in the Data Controller role is managed with diligence and in compliance with applicable laws, reflecting our ongoing commitment to transparency and user privacy.
      `.trim()
    },
    {
      id: 'changes',
      title: 'Changes to this Policy',
      content: `
  This Privacy Policy is designed to be a living document that evolves alongside our services, technologies, and legal environment. Lazarev. Agency may, from time to time, update or modify the provisions of this Policy to reflect changes in our operations or applicable laws and regulations. Below, we outline how and why we might revise this Policy, as well as how we communicate those changes to you.
  
  **1. Reasons for Updates**: We may modify this Policy for several reasons. First, as we introduce new features or services—such as additional digital platforms, partnerships, or user engagement channels—we might need to process new categories of data or use existing data in new ways. Second, changes in legislation or regulatory guidance can necessitate adjustments to our data protection approach. Third, updates in best practices for cybersecurity or data privacy might prompt us to adopt more robust or modern measures, which in turn require modifications to our documented policies.
  
  **2. Frequency of Revisions**: While we do not set arbitrary schedules for reviewing this Policy, we conduct periodic internal assessments to ensure it remains accurate and compliant. Major legislative changes, such as updates to the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), or analogous laws in other jurisdictions, often trigger immediate reviews. Additionally, we keep a close watch on emerging technologies—like artificial intelligence or blockchain—that may alter how we collect or process Personal Data.
  
  **3. Communication of Changes**: When we update this Policy, we strive to inform you in a timely and transparent manner. Depending on the nature and significance of the changes, we may notify you by email, post an announcement on our website, or display a prominent notice within our services (for instance, as a banner or pop-up notification). In cases of substantial revisions—such as those that alter how we collect sensitive data, change your rights, or affect fundamental aspects of our operations—we will seek your explicit consent if required by law.
  
  **4. Your Responsibility**: While we commit to notifying you of significant changes, we also encourage you to periodically review this Policy on your own. This proactive step helps ensure that you remain fully aware of how your Personal Data is being used, stored, and shared. If at any point you disagree with a change, you have the option to exercise your rights under relevant data protection laws. This may include withdrawing consent, requesting data portability, or objecting to data processing activities.
  
  **5. Version Tracking and Archives**: For transparency, we maintain a version history of this Policy, noting the effective dates of each revision. We may also keep archived copies of previous versions, so users or regulatory bodies can track the evolution of our data protection practices. This archival practice demonstrates our commitment to accountability, as it provides a clear record of when and why each modification was made.
  
  By outlining these procedures, we aim to demystify the policy-update process and assure you that any changes we make are carefully considered. Our ultimate goal is to continue safeguarding your Personal Data while adapting to new challenges, opportunities, and obligations in the realm of data protection. If you have any questions regarding updates to this Policy, feel free to reach out to us for clarification.
      `.trim()
    },
    {
      id: 'law',
      title: 'Governing law',
      content: `
  The legal framework governing this Privacy Policy is a vital aspect of ensuring that all data processing activities at Lazarev. Agency comply with recognized standards and regulations. This section provides an overview of the primary legal instruments and jurisdictions that influence how we handle your Personal Data, as well as how disputes or legal matters would be resolved.
  
  **1. Primary Jurisdiction**: Lazarev. Agency operates in multiple regions and, as such, adheres to various local and international data protection laws. However, unless otherwise specified in a contract or mandated by local law, this Privacy Policy is primarily governed by and construed in accordance with the laws of the jurisdiction where our main headquarters is located. We believe this approach provides a cohesive framework that simplifies compliance while respecting the local nuances of global operations.
  
  **2. International Regulations**: We also closely follow major international data protection standards such as the General Data Protection Regulation (GDPR) in the European Union, the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) in the United States, and other similarly robust frameworks around the world. Where a specific regulation applies because of your residency or location, we make every effort to ensure our practices meet or exceed those local requirements. This may involve implementing supplemental data protection measures, adapting consent mechanisms, or offering additional data subject rights.
  
  **3. Conflict of Laws**: In rare cases, conflicts may arise between the laws of different jurisdictions. When faced with such conflicts, we engage with legal counsel to determine the most stringent and protective standards to apply. Where it is not feasible to fully reconcile conflicting legal obligations, we may need to limit or adjust the services available in certain regions to ensure compliance.
  
  **4. Dispute Resolution**: Should any dispute arise regarding our data practices or interpretation of this Privacy Policy, we encourage you to contact us directly for resolution. We are committed to addressing any concerns in good faith and exploring amicable solutions. If an amicable resolution is not possible, disputes may be brought before the competent courts in the jurisdiction stated in our Terms of Service or client contracts. We also cooperate with data protection authorities and other regulatory bodies, providing all necessary information and access to ensure we maintain transparency and abide by legal mandates.
  
  **5. Regulatory Oversight**: We recognize the authority of various data protection regulators who may oversee our activities, particularly when it comes to cross-border data flows. We maintain records of our processing activities and make them available to regulators upon valid request. Compliance audits and certifications may be pursued to further validate our commitment to protecting Personal Data, and we continually monitor legal developments to proactively adjust our privacy management strategies.
  
  In summary, this Privacy Policy is governed by a combination of national and international laws, all of which contribute to our overarching mission of respecting individual privacy. By stating our principal jurisdiction while also recognizing the constraints and requirements of other regions, we aim to establish a clear, transparent, and legally sound approach to data protection. If you have questions about how a particular law may apply to your Personal Data, please reach out to us so we can provide more detailed information.
      `.trim()
    },
    {
      id: 'warranty',
      title: 'Warranty and the limitation of the liability',
      content: `
  Lazarev. Agency strives to deliver all services, products, and information under this Privacy Policy with a high standard of care and professionalism. However, it is essential to clearly define the scope of our warranties and potential limitations of liability to ensure that all parties understand their rights and responsibilities. Below is an in-depth explanation of these terms, which supplement our general Terms of Service and any applicable client agreements.
  
  **1. “As Is” Provision**: Unless otherwise specified, the services and information we provide are offered “as is” and “as available,” with no express or implied warranties. This includes implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We make reasonable efforts to ensure the accuracy and reliability of the information provided in this Privacy Policy and on our platforms, but we cannot guarantee that it is free from errors, omissions, or interruptions.
  
  **2. External Links and Third-Party Services**: Our website or services may contain links to third-party websites or services that operate independently from Lazarev. Agency. We do not assume responsibility for the content, security, or data handling practices of these external entities. By accessing these third-party links or services, you acknowledge that such actions are at your own risk. We encourage you to review the privacy policies and terms of use of any third-party platforms you engage with to ensure you are comfortable with their practices.
  
  **3. Limitation of Liability**: To the maximum extent permitted by law, Lazarev. Agency, its officers, directors, employees, and agents shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or related to your use of our services or your reliance on this Privacy Policy. This includes damages resulting from errors, omissions, loss of data, or unauthorized access to personal information. While we employ robust security measures, no method of electronic storage or transmission is entirely secure, and we cannot guarantee absolute security.
  
  **4. Exceptions and Statutory Rights**: Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for certain types of damages. In these regions, the limitations and exclusions stated in this Policy may not apply to you to the extent they are prohibited by law. In such cases, our liability will be limited to the greatest extent permitted by applicable legal standards, and you may have additional rights that vary from one jurisdiction to another.
  
  **5. Indemnification**: You agree to defend, indemnify, and hold Lazarev. Agency harmless from and against all claims, liabilities, damages, losses, or expenses, including reasonable legal fees, arising out of or related to your breach of this Privacy Policy or any other actions connected with your use of our services. We may participate in the defense of any claim subject to indemnification at our own expense and choose our counsel. This does not absolve you of your indemnification obligations.
  
  **6. Risk Acknowledgment**: By using our services or interacting with us, you acknowledge and accept the inherent risks associated with digital communications and data transfers, particularly those conducted over public networks. You agree that Lazarev. Agency is not responsible for any failures in performance resulting from events beyond our reasonable control, such as system outages, natural disasters, or cyberattacks by highly sophisticated actors.
  
  In essence, while we endeavor to maintain a high level of reliability and safety, no system can be entirely impervious to risk. This section clarifies that our services are provided under certain limitations and disclaimers to protect both us and our users in the event of unforeseen issues or disagreements. If you have questions about these limitations or any other aspects of our Policy, please reach out to us for further clarification.
      `.trim()
    }
  ]

export default function PrivacyPolicy({params}) {
  const [activeSection, setActiveSection] = useState(sections[0].id)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const observerRef = useRef(null)
  const sectionRefs = useRef({})

  useEffect(() => {
    sections.forEach(section => {
      sectionRefs.current[section.id] = document.getElementById(section.id)
    })

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -80% 0px' }
    )

    sections.forEach(section => {
      const element = document.getElementById(section.id)
      if (element) observerRef.current?.observe(element)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <><HeaderSection params={params.locale} /><div className="flex min-h-screen flex-col lg:flex-row">
          <nav className="lg:w-64 lg:min-h-screen border-r mt-2 bg-background">
              <div className="sticky top-0 p-4 lg:p-6 mt-2">
                  <button
                      className="lg:hidden mb-4 p-2 bg-accent rounded"
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                      {isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                  </button>
                  <div className={cn("space-y-1", isMobileMenuOpen ? "block" : "hidden lg:block")}>
                      {sections.map((section) => (
                          <button
                              key={section.id}
                              onClick={() => scrollToSection(section.id)}
                              className={cn(
                                  "w-full text-left px-2 py-1 text-sm rounded-md transition-all",
                                  activeSection === section.id
                                      ? "bg-accent text-accent-foreground font-bold"
                                      : "hover:bg-accent/50 font-medium"
                              )}
                          >
                              {section.title}
                          </button>
                      ))}
                  </div>
              </div>
          </nav>
          <main className=" p-4 lg:p-6 overflow-hidden">
              <div className="max-w-5xl mx-auto">
                  <h1 className="text-3xl lg:text-4xl font-bold mb-4">PRIVACY POLICY</h1>
                  <div className="text-sm text-muted-foreground mb-6">
                      <p>LAST UPDATE: MARCH 15, 2024</p>
                      <p>PUBLISHED: JANUARY 21, 2021</p>
                  </div>
                  <div className="space-y-8">
                      {sections.map((section) => (
                          <section
                              key={section.id}
                              id={section.id}
                              className={cn(
                                  "scroll-mt-16 transition-opacity duration-300",
                                  activeSection === section.id ? "opacity-100" : "opacity-50"
                              )}
                          >
                              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                              <p className="text-muted-foreground">{section.content}</p>
                          </section>
                      ))}
                  </div>
              </div>
          </main>
      </div></>
  )
}
