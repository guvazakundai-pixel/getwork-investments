export const services = [
  {
    id: "screen-replacement",
    title: "Screen Replacement",
    icon: "📺",
    short: "Cracked or broken screen? We replace it with OEM-grade panels.",
    long: "A cracked or malfunctioning laptop screen is one of the most common and visible issues users face. Beyond obvious cracks, symptoms include dead pixels, flickering, discolouration, lines across the display, or a completely black screen. These issues are typically caused by physical impact, pressure damage from closing the lid on an object, or manufacturing defects. Attempting a DIY screen replacement without proper tools and experience can damage the delicate display cable, hinges, or bezel clips — turning a minor repair into an expensive one. Our technicians use precision tools and genuine OEM-grade panels to restore your display to factory condition.",
    symptoms: ["Cracked or shattered glass", "Dead or stuck pixels", "Flickering display", "Lines across screen", "Black screen with no image"],
    time: "1–3 hours",
    benefit: "Prevents further damage to internal display connectors and makes your laptop usable again."
  },
  {
    id: "keyboard-replacement",
    title: "Keyboard Replacement",
    icon: "⌨️",
    short: "Sticky, missing, or unresponsive keys? We'll make it type like new.",
    long: "Keyboard failure can be caused by liquid spills, dust accumulation, worn-out key mechanisms, or physical damage. Symptoms include unresponsive keys, keys that stick or feel mushy, intermittent typing errors, or keys that have physically broken off. While external USB keyboards are a temporary workaround, they defeat the purpose of a laptop's portability. Replacing a laptop keyboard requires removing the entire bottom case, disconnecting the battery, and carefully extracting the keyboard — often held in place by dozens of tiny screws or melted plastic posts. Our technicians perform this delicate procedure quickly, restoring your laptop to full functionality.",
    symptoms: ["Unresponsive keys", "Sticky or stuck keys", "Keys physically broken or missing", "Intermittent typing errors", "Spilled liquid on keyboard"],
    time: "1–2 hours",
    benefit: "Restores full typing functionality and prevents liquid from reaching internal components."
  },
  {
    id: "battery-replacement",
    title: "Battery Replacement",
    icon: "🔋",
    short: "Battery draining fast or swollen? We install genuine replacement batteries.",
    long: "Laptop batteries naturally degrade over time. After 300–500 charge cycles, a battery typically holds only 60–80% of its original capacity. Symptoms include the laptop shutting down unexpectedly when unplugged, battery swelling (creating a bulge in the trackpad or chassis), excessive heat, and significantly reduced runtime. A swollen battery is a fire hazard and should be replaced immediately. Attempting to remove a swollen battery yourself can puncture the cells, releasing toxic chemicals and potentially causing a fire. We safely dispose of old batteries and install high-quality replacements that match your laptop's specifications.",
    symptoms: ["Laptop only works when plugged in", "Battery swelling or bulging chassis", "Rapid battery drain", "Laptop shuts down unexpectedly", "Excessive battery heat"],
    time: "1–2 hours",
    benefit: "Restores portable use, eliminates fire risk from swollen batteries, and improves performance."
  },
  {
    id: "charging-port-repair",
    title: "Charging Port Repair",
    icon: "🔌",
    short: "Loose or non-functional charging port? We repair or replace it.",
    long: "The charging port is one of the most physically stressed components on any laptop. Symptoms include the charger falling out easily, needing to hold the cable at an angle to charge, intermittent charging, or no charging at all. This is often caused by repeated plugging/unplugging, accidentally yanking the cable, or debris accumulating inside the port. Attempting to repair a charging port without micro-soldering skills can easily damage the motherboard pads, turning a simple port replacement into a motherboard replacement. Our technicians have the soldering equipment and steady hands needed for this delicate repair.",
    symptoms: ["Charger falls out easily", "Only charges at certain angles", "Intermittent or no charging", "Visible damage to port", "Burning smell near charging port"],
    time: "2–4 hours",
    benefit: "Restores reliable charging and prevents motherboard damage from loose connections."
  },
  {
    id: "motherboard-repair",
    title: "Motherboard Repair",
    icon: "🔧",
    short: "Component-level motherboard repair. We fix at the chip level.",
    long: "Motherboard failure can manifest in many ways: laptop won't power on, random shutdowns, no display, USB ports not working, or boot loops. Causes include liquid damage, power surges, overheating, manufacturing defects, or simply age-related component failure. At the component level, this could be a failed power management IC, blown capacitor, cracked BGA solder joint under the GPU/CPU, or damaged voltage regulator. Unlike board-swapping shops, we perform component-level repair using microscopes, hot air rework stations, soldering stations, and diagnostic tools like multimeters and oscilloscopes. This is significantly cheaper than replacing the entire motherboard.",
    symptoms: ["Laptop won't power on", "Random shutdowns or reboots", "No display but fans spin", "USB/ports not working", "Burning smell from vents"],
    time: "2–5 days",
    benefit: "Cost-effective repair — typically 70% less than motherboard replacement."
  },
  {
    id: "water-damage-repair",
    title: "Water Damage Repair",
    icon: "💧",
    short: "Liquid spill? Bring it in immediately. We can often save it.",
    long: "Water damage is one of the most time-sensitive repairs. When liquid enters a laptop, it immediately begins corroding metal contacts and creating short circuits. The key is speed — the faster we can open, clean, and dry the internal components, the higher the chance of successful repair. Symptoms include keyboard not working, random shutdowns, screen flickering, or the laptop not powering on at all. Do NOT try to turn it on to check if it works — this can cause permanent short circuit damage. Our process involves disassembling the entire laptop, ultrasonic cleaning of the motherboard, corrosion removal, inspection under microscope, and replacement of any damaged ICs.",
    symptoms: ["Liquid spilled on laptop", "Keyboard keys not working", "Random shutdowns after spill", "Corrosion visible on components", "Laptop won't power on"],
    time: "3–7 days",
    benefit: "Saves your laptop from permanent damage — early intervention has a 70-90% success rate."
  },
  {
    id: "bios-repair",
    title: "BIOS Repair",
    icon: "⚙️",
    short: "BIOS corruption or password locked? We can recover it.",
    long: "The BIOS (Basic Input/Output System) is firmware that initialises your laptop's hardware before loading the operating system. When corrupted — due to failed updates, virus attacks, or improper shutdowns — the laptop may not boot, show a black screen, or get stuck in a boot loop. BIOS password locks can also render a laptop unusable. Our technicians have specialised programmers (like CH341A) that can flash BIOS chips directly, bypass passwords, and restore corrupted firmware. This is a delicate process requiring precise desoldering/soldering of the BIOS chip or using clip programmers.",
    symptoms: ["Laptop won't boot past logo", "Black screen after BIOS update", "Boot loop", "BIOS password locked", "No display at all"],
    time: "1–3 hours",
    benefit: "Restores boot functionality without replacing the motherboard."
  },
  {
    id: "fan-replacement",
    title: "Fan Replacement",
    icon: "🌀",
    short: "Loud fan noise or overheating? We replace faulty cooling fans.",
    long: "A failing cooling fan produces distinct symptoms: loud grinding or rattling noises, the laptop overheating quickly, thermal throttling (performance slowdown), or the fan not spinning at all. This is caused by dust accumulation, bearing wear, or the fan physically hitting internal cables. Operating a laptop with a failed fan can cause permanent damage to the CPU and GPU from overheating. Fan replacement requires complete disassembly including removal of the heatsink and often replacing thermal paste. We match the exact OEM fan specification for silent, effective cooling.",
    symptoms: ["Grinding or rattling fan noise", "Laptop overheating", "Fan not spinning", "Performance throttling", "System shutting down under load"],
    time: "1–2 hours",
    benefit: "Prevents CPU/GPU damage from overheating and restores silent operation."
  },
  {
    id: "hinge-repair",
    title: "Hinge Repair",
    icon: "🔄",
    short: "Loose or broken hinge? We fix it before it cracks the screen.",
    long: "Hinge damage is a progressive issue. It starts with stiffness when opening the lid, then one side breaks, causing the screen to wobble. If left unrepaired, the broken hinge can crack the LCD, damage the display cable, or break the laptop chassis. Common causes include normal wear over thousands of open/close cycles, manufacturing defects with overtightened hinges, or physical stress. Continued use with a broken hinge risks destroying the screen assembly. We replace the hinge mechanism and reinforce the mounting points in the chassis.",
    symptoms: ["Screen wobbles when moved", "Cracked or broken plastic near hinges", "Lid doesn't open smoothly", "One side of screen lifts when opening", "Visible hinge damage"],
    time: "2–4 hours",
    benefit: "Prevents costly screen and chassis damage while restoring proper lid operation."
  },
  {
    id: "laptop-cleaning",
    title: "Laptop Cleaning",
    icon: "🧹",
    short: "Professional deep cleaning to remove dust and improve cooling.",
    long: "Over months of use, laptops accumulate dust, pet hair, and debris inside the cooling system. This acts as insulation, trapping heat and causing fans to work harder. Symptoms include loud fan noise, high temperatures, thermal throttling, and reduced battery life. Professional cleaning involves opening the laptop, removing dust from fans and heatsinks, cleaning the keyboard and ports, and reapplying thermal paste if needed. We recommend professional cleaning every 6–12 months, especially in dusty environments or for gaming laptops.",
    symptoms: ["Loud fan noise", "High temperatures", "Dust visible at vents", "Performance slowdown", "System hot to touch"],
    time: "1–2 hours",
    benefit: "Improves cooling by 10-20°C, extends component lifespan, and restores silent operation."
  },
  {
    id: "thermal-paste",
    title: "Thermal Paste Replacement",
    icon: "🌡️",
    short: "Dried-out thermal paste? We replace it to lower temperatures.",
    long: "Thermal paste is the heat-conductive compound between your CPU/GPU and the heatsink. Over 2–4 years, it dries out, cracks, and loses effectiveness. This causes higher operating temperatures, fan noise, and thermal throttling. Symptoms include the laptop running hotter than when new, fans spinning loudly during light tasks, and performance dropping during extended use. Replacing thermal paste requires complete disassembly, careful cleaning of the old compound, and precise application of high-quality paste. We use premium thermal compounds rated for 5–8 year lifespan.",
    symptoms: ["Higher temperatures than when new", "Loud fan on light tasks", "Performance dropping under sustained load", "CPU throttling during normal use", "Hot spots on laptop chassis"],
    time: "1–2 hours",
    benefit: "Lowers CPU/GPU temperatures by 10-20°C and restores original performance."
  },
  {
    id: "ssd-upgrade",
    title: "SSD Upgrade",
    icon: "💽",
    short: "HDD too slow? Upgrade to an NVMe or SATA SSD for instant speed.",
    long: "Upgrading from a traditional hard drive to an SSD is the most impactful performance improvement you can make. An SSD uses flash memory with no moving parts, delivering dramatically faster read/write speeds. Boot times drop from 2–3 minutes to 10–15 seconds. Applications open instantly. The entire system feels snappier. We install and configure NVMe, SATA, or M.2 SSDs, migrate your operating system and files, and optimise Windows for SSD performance.",
    symptoms: ["Slow boot times (over 60 seconds)", "Applications load slowly", "Constant disk usage at 100%", "File transfers take forever", "System feels sluggish"],
    time: "1–3 hours",
    benefit: "10x faster boot and application load times. The single best performance upgrade available."
  },
  {
    id: "ram-upgrade",
    title: "RAM Upgrade",
    icon: "🧠",
    short: "Not enough memory? Upgrade RAM for smoother multitasking.",
    long: "Insufficient RAM causes your laptop to use the hard drive as 'virtual memory', which is dramatically slower. Symptoms include system slowdown when multiple tabs/apps are open, stuttering in applications, lag when switching between programs, and the 'out of memory' error. We check if your laptop has upgradeable RAM (SODIMM slots) or if the RAM is soldered. For laptops with upgradeable memory, we install compatible DDR4 or DDR5 modules and verify system stability.",
    symptoms: ["Slow when many programs open", "Stuttering in applications", "System freezes under load", "'Out of memory' errors", "Excessive hard drive activity"],
    time: "30 minutes – 1 hour",
    benefit: "Smoother multitasking — run more applications simultaneously without slowdown."
  },
  {
    id: "software-troubleshooting",
    title: "Software Troubleshooting",
    icon: "🖥️",
    short: "Crashes, errors, or slow performance? We diagnose and fix software issues.",
    long: "Software problems can be just as debilitating as hardware failures. Symptoms include frequent crashes, blue screen errors, slow performance, programs not opening, driver conflicts, boot errors, and mysterious error messages. Causes range from corrupted system files, incompatible drivers, malware infection, registry errors, to failed Windows updates. Our diagnostic process includes system file checking, driver verification, memory testing, disk health analysis, startup program optimisation, and malware scanning. We resolve issues at the system level rather than applying temporary fixes.",
    symptoms: ["Frequent crashes or freezes", "Blue screen errors", "Slow performance", "Programs won't open", "Driver issues"],
    time: "1–4 hours",
    benefit: "Stable, reliable system operation without the frustration of unexplained errors."
  },
  {
    id: "virus-removal",
    title: "Virus Removal",
    icon: "🛡️",
    short: "Infected with malware? We clean it thoroughly and protect it.",
    long: "Malware infections range from annoying adware that floods your browser with pop-ups to dangerous ransomware that encrypts your files. Symptoms include strange browser behaviour, unwanted toolbars, system slowdown, pop-up ads, disabled security software, unusual network activity, and files being renamed or inaccessible. Our removal process goes beyond simple antivirus scans. We boot from a clean environment, scan all storage, remove rootkits and boot-sector viruses, clean browser hijackers, and restore system settings. We then install and configure proper protection.",
    symptoms: ["Pop-up ads everywhere", "Browser redirects to strange sites", "System very slow", "Antivirus disabled", "Files being encrypted"],
    time: "2–4 hours",
    benefit: "Complete malware removal plus ongoing protection to prevent reinfection."
  },
  {
    id: "windows-installation",
    title: "Windows Installation",
    icon: "🪟",
    short: "Need Windows installed or reinstalled? We handle everything.",
    long: "There are many reasons to reinstall Windows: persistent crashes, virus infections that won't clean up, upgrading from an old version, replacing a hard drive, or simply wanting a fresh start. A clean Windows installation removes all accumulated junk, driver conflicts, and registry errors — often making the system feel like new. We install Windows 10 or 11, install all necessary drivers, run Windows Update, remove bloatware, and configure settings for optimal performance and privacy.",
    symptoms: ["Upgrading to new storage drive", "Persistent system crashes", "After virus infection", "Old Windows version (7/8)", "System full of bloatware"],
    time: "2–4 hours",
    benefit: "A fresh, clean system that runs like new with all drivers and updates configured."
  },
  {
    id: "data-recovery",
    title: "Data Recovery",
    icon: "💾",
    short: "Lost important files? We recover data from failed drives.",
    long: "Data loss can be devastating. Whether caused by accidental deletion, drive failure, corruption, virus attack, or physical damage, losing photos, documents, and work files is stressful. Symptoms include the drive not being detected, clicking noises from an HDD, 'drive not formatted' errors, or file corruption. For logical failures (deletion, corruption), we use professional recovery software at the sector level. For physical failures (clicking drive, damaged heads), we have the clean-room equipment needed for successful recovery. We never write data to the failing drive.",
    symptoms: ["Drive not detected by computer", "Clicking or grinding noise from HDD", "Accidentally deleted files", "'Drive not formatted' error", "Corrupted files"],
    time: "1–5 days depending on complexity",
    benefit: "Retrieve irreplaceable photos, documents, and business data from failed storage."
  },
  {
    id: "performance-optimisation",
    title: "Performance Optimisation",
    icon: "⚡",
    short: "Laptop feeling slow? We optimise it to run like new.",
    long: "Over time, every laptop slows down. This is caused by startup programs, background services, disk fragmentation (on HDDs), browser cache bloat, temporary files, outdated drivers, and Windows registry clutter. Our optimisation service includes: disabling unnecessary startup programs, removing bloatware, cleaning temporary files, defragmenting HDD or optimising SSD, updating drivers, checking for hardware bottlenecks, adjusting power settings for performance, and recommending hardware upgrades (SSD, RAM) if needed.",
    symptoms: ["Slow boot and shutdown", "Programs take forever to open", "System sluggish in general", "Startup takes several minutes", "Laptop was faster when new"],
    time: "1–3 hours",
    benefit: "Dramatically improved responsiveness — often feels like a new laptop."
  },
];
