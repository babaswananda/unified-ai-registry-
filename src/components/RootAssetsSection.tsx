"use client";

import ConditionalBackground from "@/components/ui/ConditionalBackground";

export default function RootAssetsSection() {
  const structuredComputeAssets = [
    // Core Compute Infrastructure
    { domain: ".structuredcompute", description: "AI-Optimized Compute Layer", emoji: "⚙️" },
    { domain: ".edgecompute", description: "Edge Computing Infrastructure", emoji: "📡" },
    { domain: ".quantumcompute", description: "Quantum Computing Platform", emoji: "⚛️" },
    { domain: ".gpucloud", description: "GPU Cloud Computing", emoji: "☁️" },
    { domain: ".aicontrolgrid", description: "AI Control Grid Platform", emoji: "🤖" },
    { domain: ".neuralprocessor", description: "Neural Processing Infrastructure", emoji: "🧠" },
    { domain: ".microcontrollers", description: "Microcontroller Platform", emoji: "🔧" },

    // Server Infrastructure
    { domain: ".aiserver", description: "AI Server Infrastructure", emoji: "🖥️" },
    { domain: ".virtualserver", description: "Virtual Server Platform", emoji: "💻" },
    { domain: ".mcp-server", description: "MCP Server Protocol", emoji: "🔗" },
    { domain: ".sysservers", description: "System Servers", emoji: "🖥️" },

    // System Stacks & Architecture
    { domain: ".systemsstack", description: "Systems Stack Platform", emoji: "⚙️" },
    { domain: ".livestacks", description: "Live Stack Management", emoji: "📊" },
    { domain: ".viewstacks", description: "Stack Visualization", emoji: "👁️" },
    { domain: ".sysstacks", description: "System Stacks", emoji: "🔧" },
    { domain: ".stackideas", description: "Stack Development Ideas", emoji: "💡" },

    // System Configuration & Management
    { domain: ".sysconfiguration", description: "System Configuration", emoji: "⚙️" },
    { domain: ".systemsuite", description: "System Suite Platform", emoji: "🏢" },
    { domain: ".systeminsights", description: "System Insights Analytics", emoji: "📈" },
    { domain: ".systemsknowledge", description: "Systems Knowledge Base", emoji: "📚" },
    { domain: ".systemknowledge", description: "System Knowledge Hub", emoji: "🧠" },
    { domain: ".pivotsystem", description: "Pivot System Architecture", emoji: "🔄" },

    // Data Infrastructure
    { domain: ".dataos", description: "Data Operating System", emoji: "💾" },
    { domain: ".datapackets", description: "Data Packet Management", emoji: "📦" },
    { domain: ".datawarehouses", description: "Data Warehouse Platform", emoji: "🏢" },

    // API Infrastructure
    { domain: ".apinode", description: "API Node Infrastructure", emoji: "🔗" },
    { domain: ".apinodes", description: "API Nodes Network", emoji: "🔗" },
    { domain: ".apidashboard", description: "API Dashboard Management", emoji: "📊" },
    { domain: ".apiprotocols", description: "API Protocol Standards", emoji: "🔗" },
    { domain: ".apiinfrastructure", description: "API Infrastructure Platform", emoji: "🔗" },
    { domain: ".formatapis", description: "API Format Management", emoji: "📋" },
    { domain: ".apitests", description: "API Testing Platform", emoji: "🧪" },
    { domain: ".bridgeapis", description: "API Bridge Services", emoji: "🌉" },

    // Protocol & Network Infrastructure
    { domain: ".protocolit", description: "Protocol IT Infrastructure", emoji: "🔧" },
    { domain: ".protocolarchitectures", description: "Protocol Architecture Design", emoji: "🏗️" },
    { domain: ".streamiot", description: "IoT Streaming Infrastructure", emoji: "📡" },
    { domain: ".edgeio", description: "Edge Computing I/O", emoji: "📡" },

    // Development & Code Infrastructure
    { domain: ".codecontext", description: "Code Context Management", emoji: "💻" },
    { domain: ".codeinsights", description: "Code Analytics Platform", emoji: "📊" },
    { domain: ".developerinsights", description: "Developer Analytics", emoji: "👨‍💻" },
    { domain: ".codesamples", description: "Code Sample Repository", emoji: "📝" },
    { domain: ".aicodedev", description: "AI Code Development", emoji: "🤖" },

    // Smart Infrastructure
    { domain: ".smartfactory", description: "Smart Factory Infrastructure", emoji: "🏭" },
    { domain: ".smartfirm", description: "Smart Firm Operations", emoji: "🏢" },
    { domain: ".smartcampus", description: "Smart Campus Infrastructure", emoji: "🏫" },
    { domain: ".smartfinancing", description: "Smart Financing Platform", emoji: "💰" },
    { domain: ".smartlease", description: "Smart Leasing Platform", emoji: "📋" },
    { domain: ".smarthighway", description: "Smart Highway Infrastructure", emoji: "🛣️" },
    { domain: ".smartroad", description: "Smart Road Systems", emoji: "🛤️" },

    // Digital Infrastructure
    { domain: ".digitalinfrastructure", description: "Digital Infrastructure Foundation", emoji: "🌐" },
    { domain: ".digitalidcard", description: "Digital ID Infrastructure", emoji: "🆔" },
    { domain: ".digitalcopyright", description: "Digital Rights Management", emoji: "⚖️" },
    { domain: ".digitalcookbook", description: "Digital Content Platform", emoji: "📚" },
    { domain: ".digitalme", description: "Digital Identity Platform", emoji: "👤" },

    // Technology Infrastructure
    { domain: ".techwarehouse", description: "Technology Warehouse", emoji: "🏢" },
    { domain: ".techcompany", description: "Technology Company Platform", emoji: "🏢" },
    { domain: ".visiontech", description: "Vision Technology Platform", emoji: "👁️" },
    { domain: ".teslatechnology", description: "Tesla Technology Platform", emoji: "⚡" },
    { domain: ".technologydesign", description: "Technology Design Services", emoji: "🎨" },

    // Network & Communication
    { domain: ".checknetwork", description: "Network Verification", emoji: "✅" },
    { domain: ".mynetworks", description: "Network Management", emoji: "🌐" },
    { domain: ".businessnetwork", description: "Business Network Platform", emoji: "🌐" },
    { domain: ".dogenetwork", description: "Doge Network Platform", emoji: "🐕" },

    // Authentication & Security
    { domain: ".authsig", description: "Authentication Signatures", emoji: "✍️" },
    { domain: ".validsig", description: "Signature Validation", emoji: "✅" },
    { domain: ".testauth", description: "Authentication Testing", emoji: "🔍" },
    { domain: ".authdev", description: "Auth Development Platform", emoji: "🔧" },
    { domain: ".authnodes", description: "Authentication Nodes", emoji: "🔐" },

    // Configuration & Setup
    { domain: ".pathconfig", description: "Path Configuration", emoji: "🛤️" },
    { domain: ".configpath", description: "Configuration Path", emoji: "⚙️" },
    { domain: ".configui", description: "Configuration UI", emoji: "🖥️" },
    { domain: ".uiconfiguration", description: "UI Configuration", emoji: "🎨" },
    { domain: ".customconfig", description: "Custom Configuration", emoji: "🔧" },
    { domain: ".accountconfig", description: "Account Configuration", emoji: "👤" },
    { domain: ".reqconfig", description: "Request Configuration", emoji: "📋" },

    // UI & Interface
    { domain: ".uisync", description: "UI Synchronization", emoji: "🔄" },
    { domain: ".uisetup", description: "UI Setup Platform", emoji: "⚙️" },
    { domain: ".uisource", description: "UI Source Management", emoji: "📝" },

    // Process & Execution
    { domain: ".runprocess", description: "Process Execution", emoji: "⚙️" },
    { domain: ".runtest", description: "Test Execution", emoji: "🧪" },
    { domain: ".exescript", description: "Script Execution", emoji: "📜" },
    { domain: ".testslive", description: "Live Testing Platform", emoji: "🔴" },
    { domain: ".viewtests", description: "Test Visualization", emoji: "👁️" },
    { domain: ".testlab", description: "Testing Laboratory", emoji: "🧪" },

    // Libraries & Tools
    { domain: ".sharedlibraries", description: "Shared Library Management", emoji: "📚" },
    { domain: ".toollibrary", description: "Tool Library Platform", emoji: "🔧" },
    { domain: ".pdflibrary", description: "PDF Library System", emoji: "📄" },

    // Routing & Requests
    { domain: ".routebuilder", description: "Route Builder Platform", emoji: "🛤️" },
    { domain: ".requestornode", description: "Request Node Management", emoji: "📡" },
    { domain: ".reqnode", description: "Request Node Infrastructure", emoji: "🔗" },
    { domain: ".statusnode", description: "Status Node Monitoring", emoji: "📊" },

    // Application Logic
    { domain: ".applogic", description: "Application Logic Platform", emoji: "🧠" },
    { domain: ".modfile", description: "Module File Management", emoji: "📁" },

    // Viewer & Display
    { domain: ".liveviewer", description: "Live Viewer Platform", emoji: "👁️" },
    { domain: ".viewrun", description: "Runtime Viewer", emoji: "▶️" },

    // Synchronization
    { domain: ".domainsyncs", description: "Domain Synchronization", emoji: "🔄" },

    // File & Patch Management
    { domain: ".patchset", description: "Patch Management System", emoji: "🔧" },
    { domain: ".filebunk", description: "File Storage Platform", emoji: "📁" },

    // Fleet & Link Management
    { domain: ".linkfleet", description: "Link Fleet Management", emoji: "🔗" },

    // Timestamps & Time Management
    { domain: ".timestamps", description: "Blockchain Timestamps", emoji: "⏰" },

    // Container Infrastructure
    { domain: ".containerparks", description: "Container Infrastructure Parks", emoji: "📦" },
    { domain: ".containerpark", description: "Container Park Hub", emoji: "📦" },

    // Storage Infrastructure
    { domain: ".storagepods", description: "Storage Pod Infrastructure", emoji: "💾" },
    { domain: ".storagepod", description: "Storage Pod Management", emoji: "💾" },
    { domain: ".privatestorage", description: "Private Storage Platform", emoji: "🔒" }
  ];

  const infrastructureAssets = [
    { domain: ".iaas", description: "Infrastructure-as-a-Service Protocol", emoji: "🏗️" },
    { domain: ".infrastructureasaservice", description: "Complete IaaS Platform", emoji: "🏗️" },
    { domain: ".officepark", description: "Office Park Management", emoji: "🏢" },
    { domain: ".businesslicense", description: "Business Licensing Platform", emoji: "📋" },
    { domain: ".departmentoflicensing", description: "Department of Licensing", emoji: "🏛️" },
    { domain: ".licensingexpo", description: "Licensing Expo Platform", emoji: "🏢" },
    { domain: ".iplicense", description: "IP Licensing Platform", emoji: "⚖️" },
    { domain: ".businessinitiative", description: "Business Initiative Platform", emoji: "💼" },
    { domain: ".businessbootcamp", description: "Business Bootcamp", emoji: "🎓" },
    { domain: ".businessmachines", description: "Business Machines", emoji: "⚙️" },
    { domain: ".businessgpt", description: "Business GPT Platform", emoji: "🤖" },
    { domain: ".businessprompts", description: "Business Prompts", emoji: "💬" },
    { domain: ".businesscreditworkshop", description: "Business Credit Workshop", emoji: "💳" },
    { domain: ".businesscreditforum", description: "Business Credit Forum", emoji: "💬" },
    { domain: ".newbusinessaccount", description: "New Business Account", emoji: "🏦" },
    { domain: ".newbusinessname", description: "New Business Name", emoji: "📝" },
    { domain: ".lendingbusiness", description: "Lending Business", emoji: "💰" },
    { domain: ".exportbusiness", description: "Export Business", emoji: "🚢" },
    { domain: ".lifestylebusiness", description: "Lifestyle Business", emoji: "🌟" },
    { domain: ".dailybusiness", description: "Daily Business", emoji: "📅" }
  ];

  const taasAssets = [
    { domain: ".taas", description: "Technology-as-a-Service Platform", emoji: "🧠" },
    { domain: ".iotaas", description: "IoT-as-a-Service Infrastructure", emoji: "📡" },
    { domain: ".dexaas", description: "DEX-as-a-Service Platform", emoji: "💱" },
    { domain: ".scaas", description: "Supply Chain-as-a-Service", emoji: "🔗" },
    { domain: ".aiagents", description: "AI Agents Platform", emoji: "🤖" },
    { domain: ".agentsgpt", description: "AI Agent Intelligence Platform", emoji: "🤖" },
    { domain: ".aimessenger", description: "AI Communication Layer", emoji: "💬" },
    { domain: ".aischeduling", description: "AI Scheduling & Automation", emoji: "📅" },
    { domain: ".aiintegrations", description: "AI Integration Platform", emoji: "🔗" },
    { domain: ".aiarchitect", description: "AI Architecture Platform", emoji: "🏗️" },
    { domain: ".aiugc", description: "AI User Generated Content", emoji: "📝" },
    { domain: ".nocodeai", description: "No-Code AI Platform", emoji: "🔧" },
    { domain: ".creationsai", description: "AI Creation Tools", emoji: "🎨" },
    { domain: ".marketingagents", description: "Marketing AI Agents", emoji: "📈" },
    { domain: ".marketingagent", description: "Marketing AI Agent", emoji: "📊" },
    { domain: ".salesagent", description: "Sales AI Agent", emoji: "💼" },
    { domain: ".readingagent", description: "Reading AI Agent", emoji: "📚" },
    { domain: ".healingagent", description: "Healing AI Agent", emoji: "🩺" },
    { domain: ".dnsagent", description: "DNS AI Agent", emoji: "🌐" },
    { domain: ".nilagent", description: "Nil AI Agent", emoji: "🤖" },
    { domain: ".generativeagents", description: "Generative AI Agents", emoji: "🎨" },
    { domain: ".medicalagents", description: "Medical AI Agents", emoji: "🏥" },
    { domain: ".factoryai", description: "Factory AI Systems", emoji: "🏭" },
    { domain: ".visualai", description: "Visual AI Platform", emoji: "👁️" },
    { domain: ".ugcai", description: "UGC AI Platform", emoji: "📝" },
    { domain: ".aisyntax", description: "AI Syntax Platform", emoji: "💻" },
    { domain: ".aibaron", description: "AI Baron Platform", emoji: "👑" },
    { domain: ".meshai", description: "Mesh AI Platform", emoji: "🕸️" },
    { domain: ".ai4tw", description: "AI for Taiwan", emoji: "🇹🇼" },
    { domain: ".ai4ar", description: "AI for Argentina", emoji: "🇦🇷" },
    { domain: ".unifiedai", description: "Unified AI Platform", emoji: "🤖" },
    { domain: ".aitutors", description: "AI Tutors Platform", emoji: "🎓" },
    { domain: ".aipanel", description: "AI Panel Management", emoji: "📊" },
    { domain: ".ainewsletter", description: "AI Newsletter Platform", emoji: "📰" },
    { domain: ".aicondo", description: "AI Condo Management", emoji: "🏠" },
    { domain: ".aitrading", description: "AI Trading Platform", emoji: "📈" },
    { domain: ".aitradingbot", description: "AI Trading Bot", emoji: "🤖" },
    { domain: ".aicallcenters", description: "AI Call Centers", emoji: "📞" },
    { domain: ".aicallcenter", description: "AI Call Center", emoji: "📞" },
    { domain: ".aiqrcodes", description: "AI QR Codes", emoji: "📱" },
    { domain: ".aiworkflows", description: "AI Workflows", emoji: "⚙️" },
    { domain: ".aiworkflow", description: "AI Workflow Management", emoji: "🔄" },
    { domain: ".aimarketplace", description: "AI Marketplace", emoji: "🛒" },
    { domain: ".aioperator", description: "AI Operator Platform", emoji: "👨‍💻" },
    { domain: ".aiemployees", description: "AI Employees Platform", emoji: "👥" },
    { domain: ".aiavatars", description: "AI Avatars Platform", emoji: "👤" },
    { domain: ".aipoweredavatar", description: "AI Powered Avatar", emoji: "🤖" },
    { domain: ".aipoweredevents", description: "AI Powered Events", emoji: "🎉" },
    { domain: ".aiwebsitebuilder", description: "AI Website Builder", emoji: "🌐" },
    { domain: ".aisitebuilder", description: "AI Site Builder", emoji: "🏗️" },
    { domain: ".aipoweredappstore", description: "AI Powered App Store", emoji: "📱" },
    { domain: ".aipoweredapp", description: "AI Powered App", emoji: "📲" },
    { domain: ".aiappstore", description: "AI App Store", emoji: "🏪" },
    { domain: ".aivoices", description: "AI Voices Platform", emoji: "🎤" },
    { domain: ".aidirectory", description: "AI Directory", emoji: "📋" },
    { domain: ".aiglasses", description: "AI Glasses", emoji: "👓" },
    { domain: ".aiqrcode", description: "AI QR Code", emoji: "📱" },
    { domain: ".aicodedev", description: "AI Code Development", emoji: "💻" },
    { domain: ".aicontracts", description: "AI Contracts", emoji: "📜" },
    { domain: ".aicustomerservice", description: "AI Customer Service", emoji: "🤝" },
    { domain: ".aistaff", description: "AI Staff Management", emoji: "👥" },
    { domain: ".aistaffing", description: "AI Staffing Platform", emoji: "👔" },
    { domain: ".aiaffiliate", description: "AI Affiliate Platform", emoji: "🤝" },
    { domain: ".aiconsultants", description: "AI Consultants", emoji: "💼" },
    { domain: ".aiattorneys", description: "AI Attorneys", emoji: "⚖️" },
    { domain: ".aipos", description: "AI Point of Sale", emoji: "💳" }
  ];

  const supplyChainAssets = [
    { domain: ".customsduties", description: "Trade & Customs Infrastructure", emoji: "🚢" },
    { domain: ".customsduty", description: "Customs Duty Processing", emoji: "📋" },
    { domain: ".ecustoms", description: "Electronic Customs Platform", emoji: "💻" },
    { domain: ".customspaperwork", description: "Customs Documentation", emoji: "📄" },
    { domain: ".rfid", description: "RFID & IoT Infrastructure", emoji: "📡" },
    { domain: ".containerparks", description: "Container & Logistics Hubs", emoji: "📦" },
    { domain: ".containerpark", description: "Container Park Operations", emoji: "🏭" },
    { domain: ".warehouserentals", description: "Warehouse Rental Platform", emoji: "🏢" },
    { domain: ".storagerentals", description: "Storage Rental Services", emoji: "📦" },
    { domain: ".dronerentals", description: "Drone Rental Platform", emoji: "🚁" },
    { domain: ".heavyequipmentrentals", description: "Heavy Equipment Rentals", emoji: "🚜" },
    { domain: ".projectmart", description: "Project Marketplace", emoji: "🛒" },
    { domain: ".mrktplace", description: "Marketplace Platform", emoji: "🏪" },
    { domain: ".localmrkt", description: "Local Market Platform", emoji: "🏪" },
    { domain: ".vcdealflow", description: "VC Deal Flow Management", emoji: "💼" },
    { domain: ".closeout", description: "Closeout Sales Platform", emoji: "🏷️" },
    { domain: ".smartfirm", description: "Smart Firm Operations", emoji: "🏢" },
    { domain: ".smartcampus", description: "Smart Campus Infrastructure", emoji: "🏫" },
    { domain: ".officepark", description: "Office Park Management", emoji: "🏢" },
    { domain: ".businessradio", description: "Business Radio Network", emoji: "📻" },
    { domain: ".templatestore", description: "Template Marketplace", emoji: "📄" },
    { domain: ".designexchange", description: "Design Exchange Platform", emoji: "🎨" },
    { domain: ".brandingservices", description: "Branding Services Platform", emoji: "🎨" },
    { domain: ".servicemodels", description: "Service Model Framework", emoji: "📊" },
    { domain: ".itdesigns", description: "IT Design Services", emoji: "💻" },
    { domain: ".designerinsight", description: "Designer Insight Platform", emoji: "💡" },
    { domain: ".designerinsights", description: "Designer Insights Hub", emoji: "📈" },
    { domain: ".designerhq", description: "Designer Headquarters", emoji: "🏢" },
    { domain: ".moredesigns", description: "Design Portfolio Platform", emoji: "🎨" },
    { domain: ".technologydesign", description: "Technology Design Services", emoji: "⚙️" }
  ];

  const cryptoNativeAssets = [
    { domain: ".devwallet", description: "Developer Wallet Infrastructure", emoji: "👨‍💻" },
    { domain: ".bankwallet", description: "Banking Wallet Integration", emoji: "🏦" },
    { domain: ".cbdcbank", description: "CBDC Banking Infrastructure", emoji: "🏛️" },
    { domain: ".bankapi", description: "Banking API Platform", emoji: "🏦" },
    { domain: ".0xcap", description: "Crypto Capital Platform", emoji: "💰" },
    { domain: ".cryptofranchise", description: "Crypto Franchise Platform", emoji: "🏪" },
    { domain: ".encryptedblock", description: "Encrypted Blockchain", emoji: "🔐" },
    { domain: ".fileencrypt", description: "File Encryption Services", emoji: "🔒" },
    { domain: ".authsig", description: "Authentication Signatures", emoji: "✍️" },
    { domain: ".validsig", description: "Signature Validation", emoji: "✅" },
    { domain: ".testauth", description: "Authentication Testing", emoji: "🔍" },
    { domain: ".authdev", description: "Auth Development Platform", emoji: "🔧" },
    { domain: ".timestamps", description: "Blockchain Timestamps", emoji: "⏰" },
    { domain: ".tbond", description: "Treasury Bond Platform", emoji: "📜" },
    { domain: ".nilchain", description: "Nil Blockchain Protocol", emoji: "⛓️" },
    { domain: ".nilregistry", description: "Nil Registry Platform", emoji: "📋" },
    { domain: ".nilfoundation", description: "Nil Foundation Protocol", emoji: "🏛️" },
    { domain: ".nildeals", description: "Nil Deals Platform", emoji: "🤝" },
    { domain: ".nilleague", description: "Nil League Network", emoji: "🏆" },
    { domain: ".hnsholdings", description: "HNS Holdings Platform", emoji: "💼" },
    { domain: ".devregistry", description: "Developer Registry", emoji: "👨‍💻" },
    { domain: ".fixedassets", description: "Fixed Assets Management", emoji: "🏢" },
    { domain: ".residuals", description: "Residual Income Platform", emoji: "💰" },
    { domain: ".investamerica", description: "Investment Platform", emoji: "🇺🇸" },
    { domain: ".1sttrillionaire", description: "Wealth Building Platform", emoji: "💎" },
    { domain: ".trillionarie", description: "Trillion Dollar Club", emoji: "💰" },
    { domain: ".firstmillion", description: "First Million Platform", emoji: "💰" },
    { domain: ".vcdealflow", description: "VC Deal Flow Management", emoji: "💼" },
    { domain: ".investteam", description: "Investment Team Platform", emoji: "👥" },
    { domain: ".itfund", description: "IT Investment Fund", emoji: "💰" }
  ];

  const governanceAssets = [
    { domain: ".rockefellerplaza", description: "Rockefeller Plaza Platform", emoji: "🏛️" },
    { domain: ".dupontregistry", description: "DuPont Registry Platform", emoji: "🏆" },
    { domain: ".ascap", description: "ASCAP Music Rights Platform", emoji: "🎵" },
    { domain: ".ascapmusic", description: "ASCAP Music Infrastructure", emoji: "🎼" },
    { domain: ".iheartradio", description: "iHeartRadio Media Platform", emoji: "📻" },
    { domain: ".fifaworldcup26", description: "FIFA World Cup 2026", emoji: "⚽" },
    { domain: ".businesslicense", description: "Business Licensing Platform", emoji: "📋" },
    { domain: ".departmentoflicensing", description: "Department of Licensing", emoji: "🏛️" },
    { domain: ".businessinitiative", description: "Business Initiative Platform", emoji: "💼" },
    { domain: ".electionllm", description: "Election AI Platform", emoji: "🗳️" },
    { domain: ".analystdao", description: "Analyst DAO Platform", emoji: "📊" },
    { domain: ".focushope", description: "Civic Infrastructure Platform", emoji: "🏛️" },
    { domain: ".federalagent", description: "Federal Agent Infrastructure", emoji: "🕴️" },
    { domain: ".socialandeconomicrights", description: "Social & Economic Rights", emoji: "⚖️" },
    { domain: ".civilandpoliticalrights", description: "Civil & Political Rights", emoji: "🗳️" },
    { domain: ".supportblackcolleges", description: "HBCU Support Platform", emoji: "🎓" },
    { domain: ".haguetribunal", description: "International Justice Platform", emoji: "⚖️" },
    { domain: ".valuationresearch", description: "Valuation Research Platform", emoji: "📈" },
    { domain: ".evaluations", description: "Evaluation Platform", emoji: "📊" },
    { domain: ".handlestore", description: "Handle Registry Store", emoji: "🏪" },
    { domain: ".informationchain", description: "Information Chain Protocol", emoji: "🔗" },
    { domain: ".licensingexpo", description: "Licensing Expo Platform", emoji: "🏢" },
    { domain: ".iplicense", description: "IP Licensing Platform", emoji: "⚖️" },
    { domain: ".checknetwork", description: "Network Verification", emoji: "✅" },
    { domain: ".wikiwebsites", description: "Wiki Platform Network", emoji: "📚" },
    { domain: ".internetprojects", description: "Internet Project Hub", emoji: "🌐" },
    { domain: ".groupproject", description: "Collaborative Project Platform", emoji: "👥" },
    { domain: ".w3innovators", description: "Web3 Innovation Hub", emoji: "💡" },
    { domain: ".ventureframework", description: "Venture Capital Framework", emoji: "💼" },
    { domain: ".networkadvertising", description: "Network Advertising Platform", emoji: "📺" }
  ];

  const communicationAssets = [
    { domain: ".communication", description: "Communication Infrastructure", emoji: "📡" },
    { domain: ".messaging", description: "Messaging Platform", emoji: "💬" },
    { domain: ".chat", description: "Chat Services", emoji: "💭" },
    { domain: ".email", description: "Email Infrastructure", emoji: "📧" },
    { domain: ".sms", description: "SMS Services", emoji: "📱" },
    { domain: ".voice", description: "Voice Communication", emoji: "🎤" },
    { domain: ".video", description: "Video Communication", emoji: "📹" },
    { domain: ".conferencing", description: "Video Conferencing", emoji: "💻" },
    { domain: ".webinar", description: "Webinar Platform", emoji: "🎥" },
    { domain: ".streaming", description: "Live Streaming", emoji: "📺" },
    { domain: ".broadcast", description: "Broadcasting Services", emoji: "📻" },
    { domain: ".media", description: "Media Platform", emoji: "🎬" },
    { domain: ".content", description: "Content Management", emoji: "📝" },
    { domain: ".publishing", description: "Digital Publishing", emoji: "📚" },
    { domain: ".news", description: "News Platform", emoji: "📰" },
    { domain: ".social", description: "Social Media Platform", emoji: "👥" },
    { domain: ".networking", description: "Professional Networking", emoji: "🤝" },
    { domain: ".collaboration", description: "Collaboration Tools", emoji: "👥" },
    { domain: ".teamwork", description: "Team Communication", emoji: "👨‍👩‍👧‍👦" },
    { domain: ".workspace", description: "Digital Workspace", emoji: "💼" }
  ];

  const businessAssets = [
    { domain: ".business", description: "Business Platform", emoji: "💼" },
    { domain: ".enterprise", description: "Enterprise Solutions", emoji: "🏢" },
    { domain: ".corporate", description: "Corporate Services", emoji: "🏛️" },
    { domain: ".startup", description: "Startup Platform", emoji: "🚀" },
    { domain: ".entrepreneur", description: "Entrepreneur Network", emoji: "💡" },
    { domain: ".innovation", description: "Innovation Hub", emoji: "💡" },
    { domain: ".technology", description: "Technology Platform", emoji: "💻" },
    { domain: ".software", description: "Software Development", emoji: "💻" },
    { domain: ".development", description: "Development Platform", emoji: "🔧" },
    { domain: ".programming", description: "Programming Tools", emoji: "💻" },
    { domain: ".coding", description: "Coding Platform", emoji: "👨‍💻" },
    { domain: ".api", description: "API Management", emoji: "🔗" },
    { domain: ".integration", description: "System Integration", emoji: "🔗" },
    { domain: ".automation", description: "Business Automation", emoji: "⚙️" },
    { domain: ".workflow", description: "Workflow Management", emoji: "📋" },
    { domain: ".process", description: "Process Optimization", emoji: "🔄" },
    { domain: ".productivity", description: "Productivity Tools", emoji: "📈" },
    { domain: ".efficiency", description: "Efficiency Platform", emoji: "⚡" },
    { domain: ".performance", description: "Performance Management", emoji: "📊" },
    { domain: ".analytics", description: "Business Analytics", emoji: "📈" }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <ConditionalBackground
        intensity={0.8}
        particleCount={100}
        floatingCount={0}
        gridSize={100}
      />

      <div className="container-max section-padding relative z-10">
        <div className="text-center mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🧱</span>
            <span className="text-cyan-400 font-semibold">Foundation Layer</span>
          </div>

          {/* Section Header */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Built on Root Assets
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            The foundational domains and protocols that power the Infrastructure Root Layer
          </p>
        </div>

        {/* Structured Compute Assets */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Structured Compute Layer</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {structuredComputeAssets.map((asset, index) => (
              <div
                key={asset.domain}
                className="card bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-3 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:transform hover:scale-105"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  '--glow-color': '34, 211, 238'
                } as React.CSSProperties}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  card.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
                  card.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
                  card.style.setProperty('--glow-intensity', '1');
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.setProperty('--glow-intensity', '0');
                }}
              >
                <div className="text-center space-y-1">
                  <div className="text-lg mb-1">{asset.emoji}</div>
                  <h4 className="text-xs font-bold text-white">{asset.domain}</h4>
                  <p className="text-gray-300 text-xs">{asset.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure Assets */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Core Infrastructure</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {infrastructureAssets.map((asset, index) => (
              <div
                key={asset.domain}
                className="card bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-3 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:transform hover:scale-105"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  '--glow-color': '34, 211, 238'
                } as React.CSSProperties}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  card.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
                  card.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
                  card.style.setProperty('--glow-intensity', '1');
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.setProperty('--glow-intensity', '0');
                }}
              >
                <div className="text-center space-y-1">
                  <div className="text-lg mb-1">{asset.emoji}</div>
                  <h4 className="text-xs font-bold text-white">{asset.domain}</h4>
                  <p className="text-gray-300 text-xs">{asset.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TaaS Assets */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Technology-as-a-Service (TaaS)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {taasAssets.map((asset, index) => (
              <div
                key={asset.domain}
                className="card bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-3 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:transform hover:scale-105"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  '--glow-color': '34, 211, 238'
                } as React.CSSProperties}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  card.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
                  card.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
                  card.style.setProperty('--glow-intensity', '1');
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.setProperty('--glow-intensity', '0');
                }}
              >
                <div className="text-center space-y-1">
                  <div className="text-lg mb-1">{asset.emoji}</div>
                  <h4 className="text-xs font-bold text-white">{asset.domain}</h4>
                  <p className="text-gray-300 text-xs">{asset.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supply Chain Assets */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Supply Chain & Logistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {supplyChainAssets.map((asset, index) => (
              <div
                key={asset.domain}
                className="card bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:transform hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  '--glow-color': '34, 211, 238'
                } as React.CSSProperties}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  card.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
                  card.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
                  card.style.setProperty('--glow-intensity', '1');
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.setProperty('--glow-intensity', '0');
                }}
              >
                <div className="text-center space-y-2">
                  <div className="text-2xl mb-2">{asset.emoji}</div>
                  <h4 className="text-sm font-bold text-white">{asset.domain}</h4>
                  <p className="text-gray-300 text-xs">{asset.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Crypto-Native Assets */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Crypto-Native Layer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cryptoNativeAssets.map((asset, index) => (
              <div
                key={asset.domain}
                className="card bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:transform hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  '--glow-color': '34, 211, 238'
                } as React.CSSProperties}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  card.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
                  card.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
                  card.style.setProperty('--glow-intensity', '1');
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.setProperty('--glow-intensity', '0');
                }}
              >
                <div className="text-center space-y-2">
                  <div className="text-2xl mb-2">{asset.emoji}</div>
                  <h4 className="text-sm font-bold text-white">{asset.domain}</h4>
                  <p className="text-gray-300 text-xs">{asset.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Governance Assets */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Governance & Civic Layer</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {governanceAssets.map((asset, index) => (
              <div
                key={asset.domain}
                className="card bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-3 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:transform hover:scale-105"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  '--glow-color': '34, 211, 238'
                } as React.CSSProperties}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  card.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
                  card.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
                  card.style.setProperty('--glow-intensity', '1');
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.setProperty('--glow-intensity', '0');
                }}
              >
                <div className="text-center space-y-1">
                  <div className="text-lg mb-1">{asset.emoji}</div>
                  <h4 className="text-xs font-bold text-white">{asset.domain}</h4>
                  <p className="text-gray-300 text-xs">{asset.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Communication Assets */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Communication & Media Layer</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {communicationAssets.map((asset, index) => (
              <div
                key={asset.domain}
                className="card bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-3 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:transform hover:scale-105"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  '--glow-color': '34, 211, 238'
                } as React.CSSProperties}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  card.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
                  card.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
                  card.style.setProperty('--glow-intensity', '1');
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.setProperty('--glow-intensity', '0');
                }}
              >
                <div className="text-center space-y-1">
                  <div className="text-lg mb-1">{asset.emoji}</div>
                  <h4 className="text-xs font-bold text-white">{asset.domain}</h4>
                  <p className="text-gray-300 text-xs">{asset.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Assets */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Business & Enterprise Layer</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {businessAssets.map((asset, index) => (
              <div
                key={asset.domain}
                className="card bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-3 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:transform hover:scale-105"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  '--glow-color': '34, 211, 238'
                } as React.CSSProperties}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  card.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
                  card.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
                  card.style.setProperty('--glow-intensity', '1');
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.setProperty('--glow-intensity', '0');
                }}
              >
                <div className="text-center space-y-1">
                  <div className="text-lg mb-1">{asset.emoji}</div>
                  <h4 className="text-xs font-bold text-white">{asset.domain}</h4>
                  <p className="text-gray-300 text-xs">{asset.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              💡 IRL Is Just the Foundation.
            </h3>
            <p className="text-xl text-gray-300">
              You bring your mission.<br />
              We provide the digital muscle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
