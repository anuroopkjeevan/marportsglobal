import React, { useEffect, useMemo, useState } from 'react';
import { ShieldCheck, Search, FileText, X, User } from 'lucide-react';
import { fetchCmsPageContent, getCmsPageContent, subscribeCmsContent } from '../cms/content/storage';

import promo from '../assets/sankalpog.jpeg';
import rahul from '../assets/rahuloak.jpeg';
import amla from '../assets/amlaboara.jpeg';
import puvan from '../assets/puvanesan.jpeg';
import rajesh from '../assets/Rajesh Photo.jpg.jpeg';
import pmanoj from '../assets/pmanoj.jpeg';
import anil from '../assets/anil.jpeg';
import hari from '../assets/hariraj.jpeg';
import hem from '../assets/hemanth.jpeg';
import surendran from '../assets/Sundaravadivelu.jpeg';
import sharma from '../assets/vivek.jpeg';
import kumar from '../assets/harikumar.jpeg';
import tijo from '../assets/tijo.jpeg';
import ajay from '../assets/ajay.jpeg';
import asha from '../assets/ashapillai.jpeg';
import rr from '../assets/rr.jpeg';
import ll from '../assets/aaa.jpeg';
import anjana from '../assets/anjana kr.jpeg';
import ft from '../assets/ft.jpeg';
import krishnakumar from '../assets/N Krishna Kumar.jpeg';
import sanja from '../assets/sanja.jpeg';
import cha from '../assets/chaudhari.jpeg';
import gupta from '../assets/gupta.jpeg';
import govindha from '../assets/govindha.jpeg';
import key from '../assets/key note.jpeg';

export const defaultSpeakers = [
  {
    name: 'Capt. (Dr.) Sankalp Shukla',
    title: 'Managing Director â€“ Bernhard Schulte Shipmanagement (India) Pvt. Ltd.',
    description:
      "Capt. Sankalp Shukla joined BSM, formerly known as Eurasia, in 1995. He began his journey as a Deck Cadet and served on various types of vessels until attaining command in 2007. Following this, he joined BSMâ€™s Chennai office as Fleet Personnel Manager in September 2008. He later took a sabbatical to pursue an MSc in Shipping, Logistics and Supply Chain Management from the University of Plymouth, United Kingdom. Thereafter, he rejoined BSM in 2009 as a Marine Superintendent and was promoted in 2010 to the rank of Crew Manager, additionally shouldering responsibilities for business development. In December 2012, he was promoted to Deputy Director of BSM Crew Service Centre India, followed by his appointment as Director in December 2014 and subsequently as Managing Director in 2020. During his tenure, there was a substantial increase in the number of Indian seafarers serving on ships managed by the company. Overall, he has completed over 30 years with the BSM Group and continues to contribute actively to its growth. Capt. Shukla also serves as Chairman of the Foreign Ownersâ€™ Representatives and Ship Managers Association (FOSMA), Court Member of the Indian Maritime University (IMU), Trustee at NUSI ITF Trust and Maritime Floating Staff Welfare Trust (MFSWT), and General Secretary of the Maritime Awareness Program Society (MAPS). He has been conferred the prestigious Honorary Doctorate (Honoris Causa) by AMET University (Academy of Maritime Education and Training), India. The honorary degree was bestowed by Shri K. Ramachandran, Chancellor, during the institution's 32nd-year celebrations at a convocation ceremony held in Chennai on 28 January 2026.",
    imageSrc: promo,
  },
   {
    name: 'Shri.Shyam Jagannathan I.A.S',
    title: `Director General of Shipping & Additional Secretary to the Government of India`,
    description:
      'Director General of Shipping & Additional Secretary to the Government of India',
    imageSrc: key,
  },
  {
    name: 'Mr.Rajesh Menon',
    title: 'Associate Director (SME-Maritime) | Department of Promotion of Industry and Internal Trade | Ministry of Commerce & Industry',
    description:
      'Rajesh Menon is a senior technocrat and maritime policy expert with nearly three decades of experience in infrastructure development, including over twenty years across ports, shipping, logistics, and multimodal transportation. His career uniquely spans government, large corporate groups, and academia, giving him a rare ability to bridge policy intent with commercial execution. He has held senior leadership roles within the Government of India, contributing to national initiatives such as PM GatiShakti, Sagarmala, the National Logistics Policy, and the Indian Ports legislative framework. As a maritime subject-matter expert, he has evaluated and advised on complex infrastructure projects, developed integrated port connectivity and logistics strategies, and supported evidence-based policymaking at the highest levels of government. In the private sector, Rajesh spent over a decade with the Adani Group and led strategic business development initiatives at major ports, managing large teams, negotiating high-value projects, and engaging closely with regulators, investors, and CXO leadership. Beyond executive roles, Rajesh is an active consultant, author, and visiting faculty member at premier institutions.',
    imageSrc: rajesh,
  },
  {
    name: 'Cmd Jayanta Chowdhury, IN (Retd.)',
    title: 'Advisor to Chairman GRSE',
    description:
      `Commodore Jayanta Chowdhury, IN (Retd.)
Advisor to Chairman
GRSE
Commodore Jayanta Chowdhury joined Indian Navy in 1988 in Engineering
branch. He is a graduate in Mechanical Engineering from Jadavpur University, Kolkata
with a post graduate diploma in Naval Construction from IIT Delhi. He also holds an
MBA degree in Systems and Operations Research. During his entire service life, he has
been mostly associated with ship building, ship repair, ship design and ship project
management. He had the unique opportunity of heading the Indigenous Aircraft Carrier
Programme (INS Vikrant) as well as the futuristic S5 Non-Conventional Submarine
Programme. He has served in both surface ship and submarine design directorates as
well as in the ship production directorate. In January 2023, after superannuation,
Commodore Chowdhury got associated with Garden Reach Shipbuilders as an Advisor
to the Chairman. His main contribution to the growth stories of the shipyard has been
the setting up of a commercial shipbuilding division with a healthy orderbook. Other than
providing recommendations on policy level changes in the yard, Commodore
Chowdhury is currently associated with the expansion programme of the shipyard.`,
    imageSrc: cha,
  },
  {
    name: 'Mr. Datuk Puvanesan Subenthiran',
    title: 'Group CEO & MD | Privasia Group',
    description:
      'Datuk Puvanesan A/L Subenthiran is one of the founding members of PRIVASIA and was appointed as the Group Chief Executive Officer (GCEO) and Managing Director of PRIVASIA Group on 4 May 2009. Prior to this, Datuk Puvanesan was a senior in the Business Advisory and Assurance Department of BDO Simpsons Xavier in Ireland. Upon returning to Malaysia, he held the position of Chief Financial Officer of the Makmal Jaya Group. Since November 2024, he has been serving as an Executive Director of NexG Berhad and was re-appointed as an Investment Panel Member of the Human Resource Development Corporation in March 2025. He also holds directorships in several private limited companies incorporated in Malaysia.',
    imageSrc: puvan,
  },
  {
    name: "Anjana.K.R",
  tile : '',
    description:'Anjana.K.R is the Chief General Manager overseeing the Design & Engineering and Materials Procurement Departments at Cochin Shipyard Ltd. She holds a Bachelor of Technology degree in Naval Architecture & Ship Building from the Cochin University of Science & Technology. With nearly three decades of experience, she has worked extensively across ship design, shipbuilding, production engineering, and shipbuilding materials procurement. She has contributed to an impressive array of defence and commercial projects, reflecting both her comprehensive technical knowledge and her leadership in the maritime sector. She also serves as a Director on the boards of Udupi Cochin Shipyard and Hooghly Cochin Shipyard Ltd., which are wholly owned subsidiary companies of CSL.',

    imageSrc: anjana,
  },
  ,
  {
    name: 'Mr. Rahul Oak',
    title: 'Head of Energy Projects | Torm Shipping India Pvt Ltd',
    description:
      'Rahul Oak is a passionate maritime professional with more than 24 years of ship handling experience across various capacities and roles. He began his maritime journey in the millennium year 2000 as a Sailing Engineer Officer on SCI tanker ships. When he stepped ashore in 2012 to join Torm Shipping India as a Technical Superintendent, he had already sailed for several years as a Chief Engineer, gaining wide experience in most aspects of shipping operations. Based primarily in Mumbai, he acquired extensive knowledge in shipboard operations, technical ship management, risk management, and crew handling. As Head of Energy Projects at TORM for more than 3.5 years, he has actively contributed to reducing TORMâ€™s COâ‚‚ footprint by implementing various energy-saving projects onboard TORM vessels.',
    imageSrc: rahul,
  },
  {
    name: 'Mr. P Manoj',
    title: 'Editor (Shipping) - ET Infra',
    description:
      "P Manoj is an accomplished maritime journalist with nearly three decades of experience covering India's shipping, ports, logistics, and maritime policy landscape. He currently serves as Editor â€“ Shipping at ET Infra, the infrastructure-focused digital platform of The Economic Times, based in Mumbai, a role he has held since April 2022. Widely respected for his deep domain expertise, Manoj has consistently delivered authoritative reporting and sharp analysis on container shipping, shipbuilding, port development, coastal logistics, and regulatory reforms shaping India's maritime ecosystem. Prior to joining ET Infra, he was Senior Deputy Editor at The Hindu BusinessLine (2017â€“2022), where he played a key role in maritime and infrastructure coverage. Manoj was a part of the team that launched the MINT newspaper where he spent a decade reporting on shipping and logistic sectors. During his stint, Manoj also wrote a weekly shipping column named 'ALL ABOVE BOARD', first for the main paper, and then for Mint Asia, a weekly newspaper published by the MINT in Singapore. Manoj continues to shape industry discourse through insightful reporting and policy analysis. His perspectives are widely followed across India's maritime and infrastructure sectors, making him a valued contributor to conversations on the future of shipping and port-led development.",
    imageSrc: pmanoj,
  },
  {
    name: 'Mr. Hariraj P',
    title: 'Chief Operating Officer | Smart Engineering & Design Solutions (India) Pvt. Ltd',
    description:
      "Hariraj P. is the Chief Operating Officer at Smart Engineering & Design Solutions (India) Pvt. Ltd., where he leads a multi-disciplinary team of about 160 engineers in developing innovative ship designs. With a B. Tech in Naval Architecture & Ship Building from CUSAT, he began his career at G.T.R. Campbell Marine Consults, with its â€˜TRADERâ€™ series bulk carrier projects at Cochin Shipyard. At SEDS, he oversees concept & functional design development and coordinates with external partners, driving the creation of a diverse range of commercial and naval vessels. Hariraj is an active member of several technical committees, including Lloyds Register, ClassNK and DNV GL, and is a member of Indian Institute of Naval Architects and Royal Institute of Naval Architects.",
    imageSrc: hari,
  },
  {
    name: 'Mr. Hemant Sahai',
    title: 'Founding Partner | HSA Advocates',
    description:
      'Hemant Sahai is the Founding Partner of HSA Advocates and has spent over three decades advising on some of Indiaâ€™s most complex and high-impact infrastructure and energy projects. His body of work spans the entire lifecycle of large public-private partnership projects, from structuring of concession and competitive bidding documents to financing, implementation, and navigating the regulatory environment. Infrastructure including ports form a significant part of his practice. He has advised on development of major greenfield and brownfield projects in transportation and connectivity infrastructure including ports, airports, inland waterways and highways. One of the landmark engagements where he advised is the bidding of the Vizhinjam International Deepwater Transshipment Seaport in Kerala, Indiaâ€™s first deep-water transshipment hub. Mr. Sahai had advised on the development of the project, including bid advisory, drafting of the bidding documents and the concession agreements, and continues to advise VISL on implementation support. His role included advising on the complex advisory and environmental issues including defending the project from diverse environmental related challenges before the National Green Tribunal and the Supreme Court of India. His work on Vizhinjam has helped set the framework for large-scale port PPPs in India. His practice areas include corporate advisory, project finance, mergers and acquisitions, regulatory, and dispute resolution. He advises across sectors including infrastructure, energy, manufacturing, services, and financial services sectors, with a strong focus on critical and emerging sectors such as renewable energy, green hydrogen, offshore wind, and nuclear energy. He has also advised governments, regulators, and multilateral institutions on policy and regulatory matters, and is consistently ranked Band 1 by leading publications such as Chambers and Partners for Projects, Energy and Infrastructure.',
    imageSrc: hem,
  },
    {
    name: 'Mr. Hemant Sahai',
    title: 'Founding Partner | HSA Advocates',
    description:
      'Hemant Sahai is the Founding Partner of HSA Advocates and has spent over three decades advising on some of Indiaâ€™s most complex and high-impact infrastructure and energy projects. His body of work spans the entire lifecycle of large public-private partnership projects, from structuring of concession and competitive bidding documents to financing, implementation, and navigating the regulatory environment. Infrastructure including ports form a significant part of his practice. He has advised on development of major greenfield and brownfield projects in transportation and connectivity infrastructure including ports, airports, inland waterways and highways. One of the landmark engagements where he advised is the bidding of the Vizhinjam International Deepwater Transshipment Seaport in Kerala, Indiaâ€™s first deep-water transshipment hub. Mr. Sahai had advised on the development of the project, including bid advisory, drafting of the bidding documents and the concession agreements, and continues to advise VISL on implementation support. His role included advising on the complex advisory and environmental issues including defending the project from diverse environmental related challenges before the National Green Tribunal and the Supreme Court of India. His work on Vizhinjam has helped set the framework for large-scale port PPPs in India. His practice areas include corporate advisory, project finance, mergers and acquisitions, regulatory, and dispute resolution. He advises across sectors including infrastructure, energy, manufacturing, services, and financial services sectors, with a strong focus on critical and emerging sectors such as renewable energy, green hydrogen, offshore wind, and nuclear energy. He has also advised governments, regulators, and multilateral institutions on policy and regulatory matters, and is consistently ranked Band 1 by leading publications such as Chambers and Partners for Projects, Energy and Infrastructure.',
    imageSrc: hem,
  },
      {
    name: 'Mr. Hemant Sahai',
    title: 'Founding Partner | HSA Advocates',
    description:
      'Hemant Sahai is the Founding Partner of HSA Advocates and has spent over three decades advising on some of Indiaâ€™s most complex and high-impact infrastructure and energy projects. His body of work spans the entire lifecycle of large public-private partnership projects, from structuring of concession and competitive bidding documents to financing, implementation, and navigating the regulatory environment. Infrastructure including ports form a significant part of his practice. He has advised on development of major greenfield and brownfield projects in transportation and connectivity infrastructure including ports, airports, inland waterways and highways. One of the landmark engagements where he advised is the bidding of the Vizhinjam International Deepwater Transshipment Seaport in Kerala, Indiaâ€™s first deep-water transshipment hub. Mr. Sahai had advised on the development of the project, including bid advisory, drafting of the bidding documents and the concession agreements, and continues to advise VISL on implementation support. His role included advising on the complex advisory and environmental issues including defending the project from diverse environmental related challenges before the National Green Tribunal and the Supreme Court of India. His work on Vizhinjam has helped set the framework for large-scale port PPPs in India. His practice areas include corporate advisory, project finance, mergers and acquisitions, regulatory, and dispute resolution. He advises across sectors including infrastructure, energy, manufacturing, services, and financial services sectors, with a strong focus on critical and emerging sectors such as renewable energy, green hydrogen, offshore wind, and nuclear energy. He has also advised governments, regulators, and multilateral institutions on policy and regulatory matters, and is consistently ranked Band 1 by leading publications such as Chambers and Partners for Projects, Energy and Infrastructure.',
    imageSrc: hem,
  },
    {
    name: 'Mr.Manoranjan Gupta',
    title: 'Chief Product Officer Portall Infosystems',
    description:
      `A techno-functional leader with over 30 years in shipping and logistics domain. He has been in leadership role for driving product strategy, development, and delivery of technology platforms in shipping and logistics focusing on innovation, operational efficiency, and business growth, with expertise in Port Community Systems and National Single Window.

Along with other turnkey implementations across globe, Manoranjan was instrumental in design and delivering the next gen Port Community System in India as well as lead the first ever Cargo Community System for Air Cargo in India.`,
    imageSrc: gupta,
  },
   {
    name: 'Mr. Vivek Sharma',
    title: `A.P. Moller - Maersk | Head of Business Development,
Public Policy and Regulatory Affairs
India, Bangladesh and Sri Lanka Region`,
    description:`Vivek leads the growth of businesses and
collective engagement of Maersk Group across
the Indian Subcontinent Region with the
Government. He is based at Delhi and works
closely with Maersk’s Global Leadership and
Chairman’s Office.
Vivek brings with him wide experience from
prior leadership roles with Shell Plc, Tata
Group, Adani Group and KPMG.
Over the years, he has worked across Policy
and Regulatory Affairs, Mergers &
Acquisitions, and Strategy Functions across
India, Middle East, and South-East Asia.
He has extensive experience in energy and
infrastructure sectors covering international
trade negotiations, multilateral financing
arrangements and carbon policies.
By education, Vivek is a graduate in Geology
and Mining and master’s in finance and
economics. He is an alumnus of SAID Business
School, University of Oxford. He also holds CFA
(Chartered Financial Analyst) and FRM
(Financial Risk Manager) certifications.
`,
    imageSrc: sharma,
  },
  {
    name: 'Mr. Tijo C. Mathew',
    title: `GM & Head – Ports & Harbours Business Segment
Heavy Civil Infrastructure, Larsen & Toubro Limited`,
    description:`Mr. Tijo C. Mathew is a seasoned civil engineering and infrastructure leader with over 23 years of extensive experience in marine, ports, and large-scale infrastructure development. Currently serving as General Manager & Head of the Ports & Harbours Business Segment at Larsen & Toubro Construction, he leads strategic direction, operations, and execution of complex maritime infrastructure projects.

An alumnus of Indian Institute of Technology Madras and SP Jain Institute of Management and Research, Mr. Mathew holds an M.Tech in Construction Technology & Management and a Post Graduate Diploma in Executive Management. He is also a Chartered Engineer affiliated with the Institution of Civil Engineers, UK and the Engineering Council, UK.
He began his career with L&T in 2003, contributing to critical marine infrastructure projects including breakwaters, dredging, and LNG terminals. Between 2013 and 2016, he played a key role in the prestigious Riyadh Metro Project in Saudi Arabia, overseeing design and construction engineering for a 26 km elevated metro viaduct.

Upon returning to India, he led engineering design and coordination for specialized bridge and marine projects, and subsequently headed the Ports & Harbours Design & Research Centre. From 2017 onwards, he has been instrumental in delivering engineering excellence, value optimization, and tendering for multiple large-scale marine projects.
Since 2022, Mr. Mathew has transitioned into business leadership, successfully steering the Ports & Harbours segment with a focus on innovation, operational excellence, and project delivery. Under his leadership, major infrastructure projects have been executed for leading clients including the Indian Navy, Cochin Shipyard, Petronet LNG, DP World, and APM Terminals.
With a strong blend of technical expertise and strategic vision, Mr. Tijo C. Mathew continues to be a driving force in advancing port and maritime infrastructure development in India and beyond.`,
    imageSrc: tijo,
  },
    {
    name: 'Mr. Amlan Bora',
    title: 'Chief Representative | Port of Rotterdam Authority',
    description:
      'Amlan Bora is an experienced global supply chain professional who has worked with major multinational organizations such as Siemens, Philips, and Diageo in progressively senior leadership roles. Prior to his current position, he served as the Chief Representative and Trade & Investment Commissioner of the Netherlands Business Support Offices (NBSO) in India. The NBSOs are trade offices managed by the Ministry of Economic Affairs of the Dutch Government, supporting bilateral trade and investment between the Netherlands and India. Having spent many years in India, Amlan is deeply connected to and committed to the countryâ€™s development. He serves as an advisor to several non-profit organizations in India and abroad.',
    imageSrc: amla,
  },
      {
    name: 'Capt. Govind Azhakath',
    title: 'Director- Marine, Synergy Kochi',
    description:
      `Capt. Govind Azhakath
Director- Marine, Synergy Kochi
A seasoned Master Mariner with over three decades of global maritime leadership, Capt. Govind Azhakath heads ship management operations across tankers, gas carriers, bulk and container fleets. He has played a pivotal role in transforming and scaling operations into a high-performance, multi-vessel platform delivering safety, reliability and commercial excellence. 
He is known for staying composed when it matters most—whether handling high-risk situations, leading major fleet transitions, or driving efficiency and sustainability across operations. 
His approach to green shipping is grounded in practicality: making sustainability work not just in theory, but on real ships, in real conditions.`,
    imageSrc: govindha,
  },
     {
    name: `Mr. Ajay Kumar Singh`,
    title: `Head of Section, Maritime
Advisory India DNV`
,
    description:`Ajay is a maritime consultant with around 10 years of experience. He holds a
Master’s degree in Rotating Equipment, an MBA in Health Safety and
Environmental Management, and a Bachelor’s in Mechanical Engineering. He
leads and manages a diverse team of Consultants, Senior Consultants at
DNV Maritime Advisory India and delivers high-quality services to clients in
the maritime and port sectors.
His expertise spans alternative fuel technologies for ships, techno-commercial
studies for maritime decarbonization, and project management activities. Ajay
has performed gap assessments for LNG and Methanol bunkering terminal
facilities in India, and managed health & safety assessments for ports in Asia
and the Middle East. His project management skills cover projects related to
maritime decarbonization, noise and vibration studies, safety risk and
reliability, life cycle management, and shipping advisory in the Maritime and
Port Sector.
Ajay’s work spans projects across India, Singapore, UAE, Norway, and
Australia. He enhances DNV’s market presence in India, represents the
organization at various events, and is recognized as an industry expert
through his speaking engagements and contributions to conferences and
webinars.`,
    imageSrc: ajay,
  },
    {
    name: 'Dr. Asha Pillai',
    title: 'Chief Strategy Officer, Docker Vision, Kochi',
    description:`Dr. Asha Pillai is a seasoned ports, shipping, and logistics professional with over three decades of leadership experience across terminal operations, container logistics, and maritime services. 
Her career uniquely bridges industry and academia, with contributions in education, training, research, and consultancy. She currently serves as Chief Strategy Officer at Docker Vision, driving AI-powered solutions for port and logistics automation. 
Dr. Pillai is also the Founder Director of AiD Foundation and has held senior roles in container terminal and leading global shipping and logistics organizations, along with serving as visiting faculty at premier maritime institutions.`,
    imageSrc: asha,
  },
   {
    name: 'Mr.Krishna Prasad T.K',
    title: `Director and General  Manager 
Boskalis Group of Companies (India)`,
    description:`Krishna Profile
Krishna Prasad T.K. is a seasoned strategic business leader in the port and maritime services sector, with over two decades of experience spanning operations, contract management, and international project execution. As Director and General Manager of Boskalis Group Company in India since 2009, he has spearheaded business expansion across India and driving revenue growth through innovative strategies, stakeholder partnerships, and efficient contract negotiations. His leadership has been instrumental in securing major dredging projects in east west cost of India.
 
Earlier in his career, Krishna held key roles in international dredging, shipping, and offshore operations, where he honed expertise in logistics, procurement, and site administration. In his early tenure provided him with deep technical knowledge of vessel operations, compliance, and safety management. With certifications in business management, supply chain, maritime law, and AI & machine learning, Krishna blends technical acumen with strategic foresight. His achievements include successfully entering new segments of port development and negotiating high-value contracts with government and industry stakeholders, positioning him as a dynamic leader in the maritime industry.`,
    imageSrc: rr,
  },
  {
    name: 'Mr.Harisankar Radhakrishnan',
    title: `CEO UL Technology Solutions`,
    description:`Harisankar is a seasoned executive with over two decades of leadership experience in elevating customer experience, driving innovation, and scaling high-growth enterprises. His career spans Fortune 100 firms (Amazon, J&J), major Indian conglomerates (Tata Group, ITC, ULCCS), and top-tier consultancies (Accenture).
As the CEO of UL Technology Solutions (ULTS), the technology arm of the centenary-old ULCCS, Hari focuses on delivering value through new age technologies - AI, IoT, and analytics for his customers. Under his leadership, ULTS has executed cutting-edge projects including Smart City Digital Twins and urban planning initiatives, large-scale Digital Transformations for public and private sectors, Cybersecurity Audits for leading stock exchanges, and ERP & BI Transformations for major retail conglomerates.
Previously, Hari played a pivotal role at Amazon, where he transformed the multi-billion dollar business unit - Wireless devices to the #1 player in the online mobile segment in India. He was also a founding member of the Tata Group’s digital platform for MSMEs, where he defined the business & product strategy, and successfully onboarded over 1.2 lakh customers in the inaugural year.
A recipient of the 2025 Distinguished Alumni Award from IIM Kozhikode, he is recognized for his ability to drive high-velocity innovation and operational excellence in diverse environments - B2C and B2B business models, enterprise powerhouses, and large-scale cooperatives. He also serves as a Guest Faculty in Strategy and Marketing area, sharing his experience and learnings with the next generation of business leaders. He holds an MBA from IIM Kozhikode and a B.Tech from the College of Engineering Trivandrum (CET).`,
    imageSrc: ll,
  },
    {
    name: 'Mr. Rajesh Asati',
    title: `Deputy Secretary, Ministry of Ports, Shipping and Waterways`,
    description:'Rajesh Asati is a seasoned expert in maritime infrastructure and strategic planning, currently serving as Deputy Secretary (Ports) in the Ministry of Ports, Shipping & Waterways of Government of India. With over 17 years of experience, he has led transformative initiatives including the Public Private Partnership Project in Ports, Maritime Development Fund, Sagarmala Program, transshipment ports, and privatization efforts for jetties and shipyards. His previous tenure at the Gujarat Maritime Board saw pivotal contributions to the National Maritime Heritage Complex and maritime education. Rajesh holds advanced degrees in shipping management, Urban & Regional Planning and Civil Engineering, complemented by certifications in contract management, and dispute resolution.',
    imageSrc: ft,
  },
     {
    name: 'Mr. N Krishna Kumar',
    title: `Senior VP-South India-MSC`,
    description:`B. Sc.(Phy) Graduate from Loyola college and an MBA from Great Lakes Institute of Management.
Started my carrier with Maersk as Management trainee in 1993. 
Have over three decades of shipping and logistics experience across functions like Customer service, Sales, Pricing and General Management.
Have worked closely with Global retailers for designing and executing their Supply Chain Management solutions.
Have exposure to diverse leadership positions in diverse overseas markets at Hong Kong and Egypt.
Currently, based out of Chennai and heading the Southern Region for Mediterranean Shipping Company(MSC).
A keen sports fan and fitness enthusiast.`,
    imageSrc: krishnakumar,
  },
      {
    name: 'Capt. Sanjay Kushwaha,',
    title: `Director - Cruise & Hospitality  |  Bernhard Schulte Cruise & Hospitality Services (India) Pvt. Ltd.`,
    description:`Captain Sanjay Kushwaha - Bio
Captain Sanjay Kushwaha, Master Mariner, is a maritime leader with 35 years of
experience spanning ship command, global operations, and the development of
international maritime business across multiple markets in Cruise and Hospitality
sectors.
He has moved from leading complex operations at sea to building shore-based strategy
and capability—focused on cruise ship management, workforce readiness, recruitment,
and hospitality skilling that underpin scalable growth in the cruise sector.
As Director – Cruise & Hospitality at Bernhard Schulte Cruise and Hospitality Services,
he has helped establish and scale the company’s cruise platform in India, translating
global operating models and service standards into locally executable plans aligned with
India’s evolving maritime priorities.
His work sits at the intersection of industry, government, and talent pipelines—
supporting the design of scalable ocean and river cruise ecosystems while shaping skilldevelopment frameworks intended to unlock large-scale, quality employment.
With a strong focus on sustainable and future-ready practices, Captain Kushwaha brings
an execution-oriented perspective to India’s cruise and inland waterways journey—
connecting policy intent, industry capability, and on-ground delivery`,
    imageSrc: sanja,
  },
];

const normalizeCopy = (value = '') =>
  value
    .replace(/Ã¢â‚¬â€œ|â€“|–/g, '-')
    .replace(/Ã¢â‚¬â€”|â€”|—/g, '-')
    .replace(/Ã¢â‚¬â„¢|â€™|’/g, "'")
    .replace(/Ã¢â‚¬Ëœ|â€˜|‘/g, "'")
    .replace(/Ã¢â‚¬Å“|â€œ|“/g, '"')
    .replace(/Ã¢â‚¬Â|â€|”/g, '"')
    .replace(/Ã¢â€šâ€š|â‚‚/g, '2')
    .replace(/Ã¢â€žÂ¢/g, 'TM')
    .replace(/Ã‚|Â/g, ' ')
    .replace(/â€¢/g, '•')
    .replace(/\ufffd/g, '')
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

const toSingleLine = (value = '') => normalizeCopy(value).replace(/\n+/g, ' ').replace(/\s{2,}/g, ' ').trim();

const extractRole = (speaker = {}) => {
  const cleanName = toSingleLine(speaker.name || '').toLowerCase();
  const cleanTitle = toSingleLine(speaker.title || '').toLowerCase();
 if (cleanName.includes('Shri.Shyam Jagannathan I.A.S')) return 'Keynote speaker';
  if (cleanName.includes('rajesh menon')) return 'Moderator';
  if (cleanName.includes('asha pillai')) return 'Moderator';
  if (cleanName.includes('anjana.k.r') || cleanName.includes('anjana k r') || cleanName.includes('anjan kr')) return 'Moderator';
  if (cleanName.includes('amlan bora')) return 'Speaker';
  if (cleanName.includes('anil yendluri') || cleanName.includes('anil yedhuri')) return 'Speaker';
  if (cleanName.includes('hemant sahai')) return 'Speaker';
  if (cleanTitle.includes('moderator')) return 'Moderator';
  if (cleanTitle.includes('panelist')) return 'Panelist';

  if (cleanTitle.includes('speaker')) return 'Speaker';
  // Default all unspecified entries to Panelist as requested
  return 'Panelist';

};

const displayTitle = (title = '') => toSingleLine(title).replace(/\s*\|\s*/g, ' | ');

const getExcerpt = (description = '') => {
  const clean = toSingleLine(description);
  return clean.length > 230 ? `${clean.slice(0, 230).trim()}...` : clean;
};

const printSpeakerBio = (speaker) => {
  const printWindow = window.open('', '_blank', 'width=900,height=700');
  if (!printWindow) return;

  const name = toSingleLine(speaker.name);
  const title = displayTitle(speaker.title);
  const description = normalizeCopy(speaker.description);

  printWindow.document.write(`
    <html>
      <head>
        <title>${name} - Speaker Bio</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 36px; color: #1f2937; }
          h1 { margin: 0 0 8px; font-size: 28px; }
          h2 { margin: 0 0 20px; font-size: 16px; font-weight: 600; color: #1e40af; }
          p { font-size: 14px; line-height: 1.7; text-align: justify; }
        </style>
      </head>
      <body>
        <h1>${name}</h1>
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
    </html>
  `);

  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
};

const SpeakerCard = ({ speaker, onReadBio }) => (
  <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="mb-4 flex items-start gap-4">
      <div className="h-16 w-16 overflow-hidden rounded-full border border-slate-200 bg-slate-50">
        {speaker.imageSrc ? (
          <img src={speaker.imageSrc} alt={normalizeCopy(speaker.name)} className="h-full w-full object-cover object-top" />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <User className="h-6 w-6 text-slate-400" />
          </div>
        )}
      </div>
      <div className="min-w-0">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">{extractRole(speaker)}</p>
        <h3 className="text-xl font-bold leading-tight text-slate-900">{normalizeCopy(speaker.name)}</h3>
      </div>
    </div>

    <p className="mb-4 whitespace-pre-line text-sm font-medium leading-relaxed text-slate-700">{displayTitle(speaker.title)}</p>
    <p className="mb-6 text-sm leading-relaxed text-slate-600">{getExcerpt(speaker.description)}</p>

    <div className="mt-auto flex gap-3">
      <button
        onClick={() => onReadBio(speaker)}
        className="flex-1 rounded-md bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
      >
        Read Bio
      </button>
      <button
        onClick={() => printSpeakerBio(speaker)}
        className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
      >
        <FileText className="h-4 w-4" />
        PDF
      </button>
    </div>
  </article>
);

const BioModal = ({ speaker, onClose }) => {
  if (!speaker) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div className="max-h-[88vh] w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-xl" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between border-b border-slate-200 p-5">
          <div className="pr-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{extractRole(speaker)}</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">{normalizeCopy(speaker.name)}</h2>
            <p className="mt-2 whitespace-pre-line text-sm font-medium text-slate-700">{displayTitle(speaker.title)}</p>
          </div>
          <button onClick={onClose} className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700" aria-label="Close bio">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[58vh] overflow-y-auto p-5">
          <p className="text-sm leading-7 text-slate-700">{normalizeCopy(speaker.description)}</p>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-slate-200 bg-slate-50 p-4">
          <button onClick={onClose} className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
            Close
          </button>
          <button onClick={() => printSpeakerBio(speaker)} className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
            <FileText className="h-4 w-4" />
            Download Bio
          </button>
        </div>
      </div>
    </div>
  );
};

const Speakers = () => {
  const [query, setQuery] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [speakersData, setSpeakersData] = useState(defaultSpeakers);

  useEffect(() => {
    const applyCmsData = () => {
      const cms = getCmsPageContent('speakers');
      const nextSpeakers = Array.isArray(cms.speakers) ? cms.speakers : defaultSpeakers;
      setSpeakersData(nextSpeakers);
    };

    applyCmsData();
    fetchCmsPageContent('speakers').then(applyCmsData);
    const unsubscribe = subscribeCmsContent(applyCmsData);
    return unsubscribe;
  }, []);

  const organizedSpeakers = useMemo(() => {
    const seen = new Set();

    return speakersData
      .map((speaker) => ({
        ...speaker,
        name: toSingleLine(speaker.name),
        title: displayTitle(speaker.title),
        description: normalizeCopy(speaker.description),
      }))
      .filter((speaker) => {
        const dedupeKey = `${speaker.name.toLowerCase()}|${speaker.title.toLowerCase()}`;
        if (seen.has(dedupeKey)) return false;
        seen.add(dedupeKey);
        return true;
      });
  }, [speakersData]);

  const filteredSpeakers = useMemo(() => {
    if (!query.trim()) return organizedSpeakers;

    const needle = query.toLowerCase();
    return organizedSpeakers.filter((speaker) => {
      const haystack = `${speaker.name} ${speaker.title} ${speaker.description}`.toLowerCase();
      return haystack.includes(needle);
    });
  }, [organizedSpeakers, query]);

  return (
    <div className="min-h-screen bg-slate-50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 rounded-xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="mb-4 inline-flex items-center gap-3">
            <div className="rounded-lg bg-slate-800 p-2 text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Speakers & Panelists</h1>
          </div>
          {/* <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
            Meet the leaders, experts, and moderators shaping the conversation at Marks Global Maritime Summit.
          </p> */}

          <div className="relative mt-6 max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, role, or organization"
              className="w-full rounded-md border border-slate-300 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-800 outline-none ring-slate-300 focus:ring"
            />
          </div>
        </div>

        <div className="mb-4 text-sm font-medium text-slate-600">
          Showing {filteredSpeakers.length} speaker{filteredSpeakers.length === 1 ? '' : 's'}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.name} speaker={speaker} onReadBio={setSelectedSpeaker} />
          ))}
        </div>

        {filteredSpeakers.length === 0 && (
          <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
            No speakers match your search.
          </div>
        )}
      </div>

      <BioModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />
    </div>
  );
};

export default Speakers;
