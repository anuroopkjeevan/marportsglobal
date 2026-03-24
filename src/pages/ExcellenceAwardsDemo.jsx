import React from 'react';
import { Trophy, Award, Building, Users, Zap, Star, Globe, Calendar, ChevronRight, Ship, Cpu, GraduationCap, Target } from 'lucide-react';

// --- Helper Components for RulesAndGuidelines readability ---
const CategoryTag = ({ icon, text }) => (
    <div className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm border border-gray-100">
        {icon}
        <span className="text-gray-700 font-medium">{text}</span>
    </div>
);

const CriterionTag = ({ text }) => (
    <div className="flex items-center gap-2">
        <Star className="w-4 h-4 text-blue-500 flex-shrink-0" />
        <span className="text-gray-700">{text}</span>
    </div>
);

// --- Reusable Components ---

// AwardCategory Component
const AwardCategory = ({ title, category, icon }) => (
    <div className="group bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 h-full">
        <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                {icon}
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                    {title}
                </h3>
                <div className="mt-1 inline-block px-3 py-0.5 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full uppercase tracking-wider">
                    {category}
                </div>
            </div>
        </div>
    </div>
);

// AwardSection Component
const AwardSection = ({ title, icon, awards }) => (
    <div className="bg-white rounded-xl p-8 md:p-10 shadow-2xl border border-gray-200">
        <div className="flex items-center gap-4 mb-8 border-b pb-4 border-blue-200">
            <div className="p-4 bg-blue-600 rounded-full text-white shadow-lg shadow-blue-500/30">
                {icon}
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">{title}</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
                <AwardCategory
                    key={index}
                    title={award.title}
                    category={award.category}
                    icon={award.icon}
                />
            ))}
        </div>
    </div>
);

// --- NEW Component: Quick Contact Email (Button Type) ---
const QuickContactEmail = () => (
    <div className="bg-blue-600 rounded-xl p-6 text-white shadow-xl max-w-2xl mx-auto mt-12 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 flex-shrink-0" />
                <div>
                    <p className="text-sm font-semibold opacity-80 uppercase tracking-wider">
                        Official Contact for Award Regulations
                    </p>
                    <p className="text-xl font-extrabold">
                        awards@marportsglobal.com
                    </p>
                </div>
            </div>
            <a
                href="mailto:awards@marportsglobal.com?subject=Inquiry regarding MARPORTS GLOBAL 2026 Excellence Awards"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-bold rounded-full text-md hover:bg-gray-100 transition-colors duration-200 flex-shrink-0 w-full md:w-auto shadow-lg"
            >
                Send Email Now
            </a>
        </div>
    </div>
);


// --- Rules and Regulations Content (UPDATED with 'awards@marportsglobal.com') ---
const RulesAndGuidelines = () => (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-blue-50">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6 border-b-4 border-blue-200 pb-3 text-center">
            MARPORTS GLOBAL 2026 – EXCELLENCE AWARDS
        </h2>
        <p className="text-xl text-gray-700 mb-10 leading-relaxed text-center font-medium">
            The MARPORTS GLOBAL 2026 – Excellence Awards recognize outstanding achievements, 
            leadership, innovation, and long-term contributions across the global maritime, shipping, ports, 
            logistics, and allied sectors.
        </p>

        {/* Individual Rule Sections */}
        <div className="space-y-12">
            
            {/* 1. Eligibility Criteria */}
            <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3 p-2 bg-gray-50 rounded-lg border-l-4 border-blue-600">
                    <Trophy className="w-6 h-6 text-blue-600"/> 1. Eligibility Criteria
                </h3>
                <ul className="list-disc list-inside space-y-3 pl-8 text-gray-700">
                    <li>Open to organizations, institutions, startups, associations, and individuals operating within the global maritime ecosystem.</li>
                    <li>Nominees may be from any country and across public, private, or semi-government sectors.</li>
                    <li>Self-nominations and third-party nominations are both permitted.</li>
                    <li>For individual awards, nominees must hold or have held a senior leadership or influential role relevant to the category.</li>
                    <li>For organizational awards, the entity must have demonstrated measurable impact, innovation, or excellence during the evaluation period.</li>
                </ul>
            </section>

            {/* 2. Award Categories Summary */}
            <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3 p-2 bg-gray-50 rounded-lg border-l-4 border-blue-600">
                    <Trophy className="w-6 h-6 text-blue-600"/> 2. Award Categories Summary
                </h3>
                <p className="text-gray-700 mb-4 pl-8">Awards are presented across multiple segments:</p>
                <div className="grid md:grid-cols-2 gap-4 pl-8">
                    <CategoryTag icon={<Ship className="w-5 h-5" />} text="Shipping, Ports & Terminals" />
                    <CategoryTag icon={<Building className="w-5 h-5" />} text="Shipbuilding & Ship Management" />
                    <CategoryTag icon={<Cpu className="w-5 h-5" />} text="Maritime Technology, AI & Digitalization" />
                    <CategoryTag icon={<GraduationCap className="w-5 h-5" />} text="Education, CSR & Sustainability" />
                    <CategoryTag icon={<Target className="w-5 h-5" />} text="Leadership & Lifetime Achievement" />
                </div>
                <p className="text-gray-500 mt-4 text-sm pl-8">(Refer to the full list of award categories below and on the website.)</p>
            </section>

            {/* 3. Nomination Process (UPDATED EMAIL) */}
            <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3 p-2 bg-gray-50 rounded-lg border-l-4 border-blue-600">
                    <Trophy className="w-6 h-6 text-blue-600"/> 3. Nomination Process
                </h3>
                <p className="mb-3 text-gray-700 pl-8">
                    Nominations must be submitted to <a href="mailto:awards@marportsglobal.com" className="text-blue-600 hover:underline font-medium">awards@marportsglobal.com</a>
                </p>
                <p className="font-bold text-gray-800 mb-2 pl-8">Each nomination should include:</p>
                <ul className="list-decimal list-inside space-y-3 pl-12 text-gray-700">
                    <li>Complete nominee details</li>
                    <li>Selected award category</li>
                    <li>A brief citation (maximum 500 words) highlighting achievements, impact, and justification</li>
                    <li>Supporting documents, where applicable (profiles, project summaries, media coverage, certifications, etc.)</li>
                    <li>Incomplete or late submissions may not be considered.</li>
                </ul>
            </section>
            
            {/* 4. Evaluation & Jury Process */}
            <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3 p-2 bg-gray-50 rounded-lg border-l-4 border-blue-600">
                    <Trophy className="w-6 h-6 text-blue-600"/> 4. Evaluation & Jury Process
                </h3>
                <p className="text-gray-700 mb-3 pl-8">
                    All nominations will be reviewed by an independent jury panel comprising eminent maritime leaders, industry experts, and academicians.
                </p>
                <p className="font-bold text-gray-800 mb-2 pl-8">Evaluation will be based on criteria such as:</p>
                <div className="grid md:grid-cols-2 gap-4 pl-8">
                    <CriterionTag text="Innovation and excellence" />
                    <CriterionTag text="Industry impact and contribution" />
                    <CriterionTag text="Sustainability and governance" />
                    <CriterionTag text="Leadership and strategic vision" />
                    <CriterionTag text="Long-term value to the maritime sector" />
                </div>
                <p className="text-sm text-red-600 mt-4 pl-8">The decision of the jury shall be final and binding.</p>
            </section>
            
            {/* 5. Rules & Regulations */}
            <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3 p-2 bg-gray-50 rounded-lg border-l-4 border-blue-600">
                    <Trophy className="w-6 h-6 text-blue-600"/> 5. Rules & Regulations
                </h3>
                <ul className="list-disc list-inside space-y-3 pl-8 text-gray-700">
                    <li>A nominee may be submitted for more than one category, provided separate justifications are given.</li>
                    <li>Award organizers reserve the right to reclassify or merge categories, or withhold an award if entries do not meet the required standard.</li>
                    <li>Submission of a nomination implies acceptance of all rules and conditions.</li>
                    <li>MARPORTS GLOBAL reserves the right to use nominee names, logos, and citations for event promotion, media, and official publications.</li>
                    <li>Providing false or misleading information may lead to disqualification at any stage.</li>
                </ul>
            </section>
            
            {/* 6. Important Dates */}
            <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3 p-2 bg-gray-50 rounded-lg border-l-4 border-blue-600">
                    <Trophy className="w-6 h-6 text-blue-600"/> 6. Important Dates
                </h3>
                <ul className="list-disc list-inside space-y-3 pl-8 text-gray-700 font-semibold">
                    {/* <li className="text-red-700">Last Date for Submission of Nominations: <span className="text-gray-800">25th March 2026</span></li> */}
                    <li>Shortlisted nominees will be informed via official communication.</li>
                    <li>Awards will be presented during the MARPORTS GLOBAL Conference & Excellence Awards 2026 on: <span className="text-gray-800">25th April 2026 at Lemon Tree Hotel, Trivandrum, India.</span></li>
                </ul>
            </section>

            {/* 7. Contact Information (UPDATED EMAIL) */}
            <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3 p-2 bg-gray-50 rounded-lg border-l-4 border-blue-600">
                    <Trophy className="w-6 h-6 text-blue-600"/> 7. Contact Information
                </h3>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 pl-8">
                    <p className="text-gray-700 mb-2">For nomination support, sponsorship association, or clarifications, please contact:</p>
                    <p className="text-xl font-bold text-blue-700 mb-1">MARPORTS GLOBAL – Awards Secretariat</p>
                    <p className="text-gray-700 mb-1">Email: <a href="mailto:awards@marportsglobal.com" className="text-blue-600 hover:underline font-medium">awards@marportsglobal.com</a></p>
                    <p className="text-gray-700">Website: <a href="http://marportsglobal.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">http://marportsglobal.com/</a></p>
                </div>
            </section>
            
        </div>
        
        {/* Nomination CTA (Big Button) (UPDATED EMAIL) */}
        <div className="mt-12 pt-8 border-t border-gray-300 text-center">
            <a 
                href="mailto:awards@marportsglobal.com?subject=Nomination for MARPORTS GLOBAL 2026 Excellence Awards" 
                className="group inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full text-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-600/50"
            >
                <span className="flex items-center gap-2">
                    SUBMIT YOUR NOMINATION VIA EMAIL
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
            </a>
            <p className="mt-4 text-gray-500 text-sm">
                Clicking this button will open your email client with the nomination address pre-filled
            </p>
        </div>
    </div>
);

// Excellence Awards data
const excellenceAwardsData = [
    { title: "Excellence in Port Strategy", category: "Strategic Planning", icon: <Building className="w-5 h-5" /> },
    { title: "Excellence in Public Sector Leadership", category: "Government", icon: <Users className="w-5 h-5" /> },
    { title: "Excellence in Port Development", category: "Infrastructure", icon: <Building className="w-5 h-5" /> },
    { title: "Excellence in Legal Maritime Affairs", category: "Legal Excellence", icon: <Award className="w-5 h-5" /> },
    { title: "Excellence in Green Shipping Initiative", category: "Sustainability", icon: <Zap className="w-5 h-5" /> },
    { title: "Best CSR Initiative in Maritime Sector", category: "Corporate Responsibility", icon: <Star className="w-5 h-5" /> },
    { title: "Excellence in Maritime Services", category: "Service Excellence", icon: <Users className="w-5 h-5" /> },
    { title: "Best Employer of the Year", category: "Workplace Excellence", icon: <Users className="w-5 h-5" /> },
    { title: "Outstanding Contribution to the Global Maritime Industry", category: "Industry Impact", icon: <Globe className="w-5 h-5" /> },
];

// Lifetime Achievement Awards data
const lifetimeAwardsData = {
    title: "Lifetime Achievement Awards",
    icon: <Award className="w-6 h-6" />,
    awards: [
        { title: "Lifetime Achievement Award – Maritime Services", category: "Career Excellence", icon: <Award className="w-5 h-5" /> },
        { title: "Lifetime Achievement Award – Entrepreneurship", category: "Entrepreneurial Legacy", icon: <Zap className="w-5 h-5" /> },
        { title: "Lifetime Achievement Award – Ship Design and Technology", category: "Technical Innovation", icon: <Ship className="w-5 h-5" /> },
    ]
};

// --- Main Page Component ---
const ExcellenceAwardsDemo = () => {
    // Placeholder imports for promoting logos
    // In a real application, replace these with your actual image imports:
    // import promotingLogo from './assets/Final Logo 2020-1.png';
    // import promo from './assets/logo2.png';
    // import promot from './assets/logo3.png';
    const promotingLogo = "https://via.placeholder.com/100?text=Logo+1"; 
    const promo = "https://via.placeholder.com/100?text=Logo+2"; 
    const promot = "https://via.placeholder.com/100?text=Logo+3"; 

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Hero/Title Section */}
            <section className="py-16 bg-white border-b border-gray-200 shadow-sm">
                <div className="container mx-auto px-4 text-center max-w-7xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        MARPORTS GLOBAL 2026 
                        <span className="text-blue-600 block sm:inline-block sm:ml-4">EXCELLENCE AWARDS</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto">
                        Your essential guide to the Rules, Regulations, and Nomination Guidelines.
                    </p>
                    <p className="mt-2 text-lg text-gray-500 max-w-4xl mx-auto">
                        Recognizing outstanding achievements, leadership, innovation, and long-term contributions across the global maritime industry.
                    </p>
                </div>
            </section>
            
            {/* Main Content Sections */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-7xl space-y-16">
                    
                   


                    {/* 1. Rules Section */}
                    <RulesAndGuidelines />

                    {/* NEW: Quick Email Contact Component */}
                    <QuickContactEmail />

                    {/* 2. Excellence & Achievement Awards List */}
                    <AwardSection 
                        title="Excellence & Achievement Awards" 
                        icon={<Trophy className="w-6 h-6" />} 
                        awards={excellenceAwardsData} 
                    />
                    
                    {/* 3. Lifetime Achievement Awards List */}
                    <AwardSection 
                        title={lifetimeAwardsData.title} 
                        icon={lifetimeAwardsData.icon} 
                        awards={lifetimeAwardsData.awards} 
                    />
                </div>
            </section>
        </div>
    );
};

export default ExcellenceAwardsDemo;