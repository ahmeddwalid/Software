
import React from 'react';
import { PlatformData } from './types';
import { WindowsIcon, LinuxIcon, AppleIcon, AndroidIcon, WebIcon, PuzzleIcon } from './components/icons/PlatformIcons';

export const APP_DATA: PlatformData[] = [
  {
    id: 'windows',
    name: 'Windows',
    icon: { component: WindowsIcon, props: { className: "w-8 h-8 mr-3 text-blue-500" } },
    categories: [
      {
        name: 'Essential Tools',
        apps: [
          { name: 'Git for Windows', url: 'https://git-scm.com/', description: 'Version control system.' },
        ],
      },
      {
        name: 'Browsers',
        apps: [
          { name: 'Brave', url: 'https://brave.com/download/', description: 'Privacy-focused browser.' },
          { name: 'Firefox', url: 'https://www.mozilla.org/en-US/firefox/new/', description: 'Open-source browser.' },
          { name: 'Chrome', url: 'https://www.google.com/chrome/', description: 'Popular feature-rich browser.' },
          { name: 'Tor Browser', url: 'https://www.torproject.org/download/', description: 'For anonymous browsing.' },
          { name: 'Arc', url: 'https://arc.net/', description: 'Innovative new browser.' },
        ],
      },
      {
        name: 'Customization',
        apps: [
          { name: 'Wallpaper Engine', url: 'https://store.steampowered.com/app/431960/Wallpaper_Engine/', description: 'Animated desktop wallpapers.' },
          { name: 'Rainmeter', url: 'https://www.rainmeter.net/', description: 'Desktop customization tool.' },
          { name: 'Nexus Dock', url: 'https://www.winstep.net/nexus.asp', description: 'Application launcher dock.' },
          { name: 'RoundedTB', url: 'https://roundedtb.en.uptodown.com/windows/download', description: 'Customize taskbar appearance.' },
          { name: 'TranslucentTB', url: 'https://apps.microsoft.com/detail/9pf4kz2vn4w9?hl=en-US&gl=US', description: 'Make taskbar translucent.' },
          { name: 'TaskbarX', url: 'https://taskbarx.en.uptodown.com/windows/download', description: 'Center taskbar icons.' },
          { name: 'StartAllBack', url: 'https://www.startallback.com/', description: 'Classic start menu for Win11.' },
          { name: 'Lively Wallpaper', url: 'https://apps.microsoft.com/detail/9ntm2qc6qws7', description: 'Free animated wallpapers.' },
          { name: 'ExplorerPatcher', url: 'https://github.com/valinet/ExplorerPatcher', description: 'Customize Windows 11 taskbar & more.' },
        ],
      },
      {
        name: 'Hardware & System Utilities',
        apps: [
          { name: 'G-Helper', url: 'https://github.com/seerge/g-helper/releases', description: 'Lightweight ASUS laptop utility.' },
          { name: 'Winaero Tweaker', url: 'https://winaero.com/winaero-tweaker/', description: 'System tweaking tool.' },
          { name: 'HWiNFO', url: 'https://www.hwinfo.com/download/', description: 'Hardware information utility.' },
          { name: 'CPU-Z', url: 'https://www.cpuid.com/softwares/cpu-z.html', description: 'CPU information utility.' },
          { name: 'GPU-Z', url: 'https://www.techpowerup.com/download/techpowerup-gpu-z/', description: 'GPU information utility.' },
          { name: 'CrystalDiskInfo', url: 'https://sourceforge.net/projects/crystaldiskinfo/', description: 'HDD/SSD health monitoring.' },
          { name: 'Memtest64', url: 'https://www.techpowerup.com/memtest64/', description: 'RAM stability testing.' },
          { name: 'MSI Afterburner', url: 'https://www.msi.com/Landing/afterburner/graphics-cards', description: 'GPU overclocking utility.' },
          { name: 'CrystalDiskMark', url: 'https://sourceforge.net/projects/crystaldiskmark/', description: 'Disk benchmark tool.' },
          { name: 'FurMark', url: 'https://www.techpowerup.com/download/furmark/', description: 'GPU stress test.' },
          { name: 'TreeSize Free', url: 'https://www.jam-software.com/treesize_free', description: 'Disk space analyzer.' },
          { name: 'EarTrumpet', url: 'https://apps.microsoft.com/detail/9nblggh516xp?hl=en-US&gl=US', description: 'Advanced volume control.' },
          { name: 'PolicyPlus', url: 'https://github.com/Fleex255/PolicyPlus', description: 'Local Group Policy editor (Not for Win Pro).' },
          { name: 'Wintoys', url: 'https://www.microsoft.com/store/productId/9P8LTPGCBZXD', description: 'System tweaking and optimization.' },
          { name: 'Winver UWP', url: 'https://www.microsoft.com/store/productId/9N60S2VFMB7L', description: 'Modern Windows version viewer.' },
          { name: 'ModernNotify', url: 'https://www.microsoft.com/store/productId/9PJH1QSV3KV6', description: 'Customizable notifications.' },
          { name: 'Sniffnet', url: 'https://sniffnet.net/', description: 'Network traffic monitor.' },
          { name: 'AutoHotkey', url: 'https://www.autohotkey.com/', description: 'Scripting language for automation.' },
        ],
      },
      {
        name: 'Code/Text Editors & IDEs',
        apps: [
          { name: 'VS Code', url: 'https://code.visualstudio.com/download', description: 'Popular code editor.' },
          { name: 'Android Studio', url: 'https://developer.android.com/studio', description: 'IDE for Android development.' },
          { name: 'Arduino IDE', url: 'https://www.arduino.cc/en/software', description: 'IDE for Arduino boards.' },
          { name: 'Kate', url: 'https://apps.microsoft.com/detail/9nwmw7bb59hw?hl=en-US&gl=US', description: 'Advanced text editor by KDE.' },
          { name: 'Notepad++', url: 'https://notepad-plus-plus.org/downloads/', description: 'Lightweight text editor.' },
          { name: 'NetBeans IDE', url: 'https://netbeans.apache.org/front/main/download/index.html', description: 'Java IDE and more.' },
          { name: 'Joplin', url: 'https://github.com/laurent22/joplin/releases', description: 'Open-source note-taking app.' },
          { name: 'Trilium Notes', url: 'https://github.com/zadam/trilium', description: 'Hierarchical note-taking application.' },
          { name: 'Logseq', url: 'https://logseq.com/', description: 'Privacy-first, open-source knowledge base.' },
        ],
      },
      {
        name: 'Content Creation',
        apps: [
          { name: 'Blender', url: 'https://www.blender.org/download/', description: '3D creation suite.' },
          { name: 'FreeCAD', url: 'https://www.freecad.org/index.php', description: 'Parametric 3D modeler.' }, 
          { name: 'OpenSCAD', url: 'https://openscad.org/index.html', description: 'Script-based 3D modeler.' },
          { name: 'DaVinci Resolve', url: 'https://www.blackmagicdesign.com/products/davinciresolve', description: 'Professional video editor.' },
          { name: 'Audacity', url: 'https://www.audacityteam.org/download/', description: 'Audio editor and recorder.' },
          { name: 'GIMP', url: 'https://www.gimp.org/downloads/', description: 'Image manipulation program.' },
          { name: 'Fritzing', url: 'https://fritzing.en.softonic.com/', description: 'Electronics design tool (link may vary).' },
          { name: 'KiCAD', url: 'https://www.kicad.org/download/', description: 'EDA software suite.' },
          { name: 'Inkscape', url: 'https://inkscape.org/release/inkscape-1.3.2/', description: 'Vector graphics editor.' },
          { name: 'Krita', url: 'https://krita.org/en/download/', description: 'Digital painting software.' },
          { name: 'LMMS', url: 'https://lmms.io/download#windows', description: 'Digital audio workstation.' },
        ],
      },
      {
        name: 'Game Stores & Launchers',
        apps: [
          { name: 'Steam', url: 'https://store.steampowered.com/about/', description: 'Popular game distribution platform.' },
          { name: 'Heroic Games Launcher', url: 'https://heroicgameslauncher.com/', description: 'Launcher for Epic Games & GOG.' },
          { name: 'Epic Games Store', url: 'https://store.epicgames.com/en-US/download', description: 'Game store and launcher.' },
          { name: 'GOG Galaxy', url: 'https://www.gog.com/galaxy', description: 'DRM-free game platform.' },
          { name: 'Ubisoft Connect', url: 'https://ubisoftconnect.com/en-US/', description: 'Ubisoft game launcher.' },
        ],
      },
      {
        name: 'Social Media & Communication',
        apps: [
          { name: 'Discord', url: 'https://discord.com/download', description: 'Voice, video, and text chat.' },
          { name: 'Signal', url: 'https://signal.org/download/', description: 'Secure messaging app.' },
          { name: 'Telegram Desktop', url: 'https://desktop.telegram.org/', description: 'Fast and secure messaging.' },
          { name: 'Zoom', url: 'https://zoom.us/download', description: 'Video conferencing.' },
          { name: 'WhatsApp Desktop', url: 'https://apps.microsoft.com/detail/9nksqgp7f2nh', description: 'WhatsApp for desktop.' },
        ],
      },
      {
        name: 'Image Burners',
        apps: [
          { name: 'Rufus', url: 'https://rufus.ie/en/', description: 'Create bootable USB drives.' },
          { name: 'Balena Etcher', url: 'https://etcher.balena.io/', description: 'Flash OS images to SD cards & USB drives.' },
        ],
      },
      {
        name: 'Media Players & Viewers',
        apps: [
          { name: 'QuickLook', url: 'https://apps.microsoft.com/detail/9nv4bs3l1h4s?hl=en-US&gl=US', description: 'macOS-like quick file preview.' },
          { name: 'Okular', url: 'https://apps.microsoft.com/detail/9n41msq1wnm8?hl=en-us&gl=US', description: 'Universal document viewer by KDE.' },
          { name: 'ImageGlass', url: 'https://imageglass.org/release/imageglass-9-0-11-502-52', description: 'Lightweight image viewer.' },
          { name: 'VLC Media Player', url: 'https://www.videolan.org/vlc/download-windows.html', description: 'Versatile media player.' },
          { name: 'MPV', url: 'https://mpv.io/', description: 'Command-line focused media player.' },
          { name: 'MusicBee', url: 'https://getmusicbee.com/downloads/', description: 'Music manager and player.' },
          { name: 'JPEGView', url: 'https://sourceforge.net/projects/jpegview/', description: 'Fast and configurable image viewer.' },
          { name: 'IrfanView', url: 'https://www.irfanview.com/', description: 'Compact image viewer and editor.' },
          { name: 'Sumatra PDF', url: 'https://www.sumatrapdfreader.org/free-pdf-reader', description: 'Lightweight PDF viewer.' },
        ],
      },
      {
        name: 'Programming Languages & Frameworks',
        apps: [
          { name: 'MinGW', url: 'https://sourceforge.net/projects/mingw/', description: 'GCC for Windows.' },
          { name: 'Python 3', url: 'https://www.python.org/downloads/', description: 'Popular programming language.' },
          { name: 'Java', url: 'https://www.java.com/download/ie_manual.jsp', description: 'Java Development Kit.' },
          { name: 'Flutter', url: 'https://docs.flutter.dev/get-started/install', description: 'UI toolkit for cross-platform apps.' },
        ],
      },
      {
        name: 'Office Suites',
        apps: [
          { name: 'Microsoft Office', url: 'https://www.microsoft.com/en-us/microsoft-365/download-office', description: 'Productivity suite.' },
          { name: 'LibreOffice', url: 'https://www.libreoffice.org/download/download-libreoffice/', description: 'Free and open-source office suite.' },
        ],
      },
      {
        name: 'File Management & Transfer',
        apps: [
          { name: 'Files', url: 'https://files.community/download', description: 'Modern file manager for Windows.' },
          { name: 'LocalSend', url: 'https://localsend.org/#/download', description: 'Share files across devices locally.' },
          { name: 'KDE Connect', url: 'https://apps.microsoft.com/detail/9n93mrmsxbf0?hl=en-us&gl=US', description: 'Integrate phone and computer.' },
          { name: 'qBittorrent', url: 'https://www.qbittorrent.org/download', description: 'Torrent client.' },
          { name: 'FileZilla', url: 'https://filezilla-project.org/download.php?platform=win64', description: 'FTP client.' },
          { name: 'JDownloader 2', url: 'https://jdownloader.org/jdownloader2', description: 'Download manager.' },
        ],
      },
      {
        name: 'Network Tools',
        apps: [
          { name: 'Wireshark', url: 'https://www.wireshark.org/download.html', description: 'Network protocol analyzer.' },
          { name: 'Angry IP Scanner', url: 'https://angryip.org/download/#windows', description: 'Network scanner.' },
          { name: 'NetLimiter', url: 'https://www.netlimiter.com/', description: 'Network traffic control and monitoring.' },
        ],
      },
      {
        name: 'Game Engines',
        apps: [
          { name: 'Unreal Engine', url: 'https://www.unrealengine.com/en-US/download', description: 'Powerful game engine.' },
          { name: 'Godot Engine', url: 'https://godotengine.org/download/windows/', description: 'Free and open-source game engine.' },
        ],
      },
      {
        name: 'Virtualization',
        apps: [
          { name: 'VirtualBox', url: 'https://www.virtualbox.org/wiki/Downloads', description: 'Virtualization software.' },
          { name: 'VMware Workstation Player', url: 'https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html', description: 'Virtualization software.' },
        ],
      },
      {
        name: 'Portable Tools',
        apps: [
          { name: 'Logitech Onboard Memory Manager', url: 'https://support.logi.com/hc/en-us/articles/360059641133-Onboard-Memory-Manager', description: 'Manage Logitech device settings.' },
          { name: 'ValiDrive', url: 'https://www.grc.com/validrive.htm', description: 'Validate USB drive integrity.' },
          { name: 'OpenRGB', url: 'https://openrgb.org/', description: 'Control RGB lighting.' },
          { name: 'HxD Hex Editor', url: 'https://mh-nexus.de/en/hxd/', description: 'Hex editor.' },
          { name: 'OpenSpeedTest Selfhosted', url: 'https://openspeedtest.com/selfhosted-speedtest', description: 'Self-hosted speed test server.' },
          { name: 'HWMonitor', url: 'https://www.cpuid.com/softwares/hwmonitor.html', description: 'Hardware monitoring.' },
        ],
      },
      {
        name: 'NirSoft Utilities',
        apps: [
          { name: 'USBDLogView', url: 'https://www.nirsoft.net/utils/usb_log_view.html', description: 'Logs USB device connections.' },
          { name: 'IconsExtract', url: 'https://www.nirsoft.net/utils/iconsext.html', description: 'Extract icons from files.' },
          { name: 'DevManView', url: 'https://www.nirsoft.net/utils/device_manager_view.html', description: 'Alternative to Device Manager.' },
          { name: 'BlueScreenView', url: 'https://www.nirsoft.net/utils/blue_screen_view.html', description: 'Analyze crash dump files.' },
          { name: 'LastActivityView', url: 'https://www.nirsoft.net/utils/computer_activity_view.html', description: 'View recent computer activity.' },
          { name: 'AdvancedRun', url: 'https://www.nirsoft.net/utils/advanced_run.html', description: 'Run programs with specific settings.' },
          { name: 'RunAsDate', url: 'https://www.nirsoft.net/utils/run_as_date.html', description: 'Run programs with a specific date/time.' },
        ],
      },
      {
        name: 'Microsoft Sysinternals',
        apps: [
          { name: 'Autoruns', url: 'https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns', description: 'Manage startup programs.' },
          { name: 'ZoomIt', url: 'https://learn.microsoft.com/en-us/sysinternals/downloads/zoomit', description: 'Screen zoom and annotation tool.' },
          { name: 'Sigcheck', url: 'https://learn.microsoft.com/en-us/sysinternals/downloads/sigcheck', description: 'File version and signature checker.' },
          { name: 'SDelete', url: 'https://learn.microsoft.com/en-us/sysinternals/downloads/sdelete', description: 'Securely delete files.' },
          { name: 'DiskView', url: 'https://learn.microsoft.com/en-us/sysinternals/downloads/diskview', description: 'Graphical disk sector utility.' },
          { name: 'PsKill', url: 'https://learn.microsoft.com/en-us/sysinternals/downloads/pskill', description: 'Command-line process killer.' },
          { name: 'Coreinfo', url: 'https://learn.microsoft.com/en-us/sysinternals/downloads/coreinfo', description: 'Show CPU features.' },
          { name: 'EFSDump', url: 'https://learn.microsoft.com/en-us/sysinternals/downloads/efsdump', description: 'View EFS information.' },
        ],
      },
      {
        name: 'Microsoft Developer Tools',
        apps: [
          { name: 'PowerToys', url: 'https://learn.microsoft.com/en-us/windows/powertoys/install', description: 'Set of utilities for power users.' },
          { name: 'Dev Home', url: 'https://learn.microsoft.com/en-us/windows/dev-home/', description: 'Control center for developers.' },
        ],
      },
      {
        name: 'Security & Privacy',
        apps: [
          { name: 'xd-AntiSpy', url: 'https://github.com/builtbybel/xd-AntiSpy/releases/tag/4.12.6', description: 'Windows privacy tool.' },
          { name: 'O&O ShutUp10++', url: 'https://www.oo-software.com/en/shutup10', description: 'Windows privacy settings manager.' },
          { name: 'VeraCrypt', url: 'https://www.veracrypt.fr/en/Downloads.html', description: 'Disk encryption software.' },
          { name: 'Bitwarden', url: 'https://bitwarden.com/', description: 'Password manager.' },
          { name: 'Bitdefender', url: 'https://www.bitdefender.com/', description: 'Antivirus software.' },
          { name: 'Kaspersky', url: 'https://me-en.kaspersky.com/', description: 'Antivirus software.' },
          { name: 'Eraser', url: 'https://eraser.heidi.ie/', description: 'Securely wipe data from HDD.' },
          { name: 'Unchecky', url: 'https://unchecky.com/', description: 'Prevents unwanted bundled software.' },
          { name: 'Fawkes', url: 'https://sandlab.cs.uchicago.edu/fawkes/', description: 'Image cloaking tool for privacy.' },
        ],
      },
      {
        name: 'Miscellaneous Utilities',
        apps: [
          { name: 'Greenshot', url: 'https://getgreenshot.org/', description: 'Screenshot tool.' },
          { name: 'HandBrake', url: 'https://handbrake.fr/', description: 'Video transcoder.' },
          { name: 'superF4', url: 'https://stefansundin.github.io/superf4/', description: 'Force close applications.' },
          { name: 'Google Earth Pro', url: 'https://www.google.com/earth/about/versions/', description: 'Explore the globe.' },
          { name: 'OBS Studio', url: 'https://obsproject.com/', description: 'Screen recording and streaming.' },
          { name: '7-Zip', url: 'https://www.7-zip.org/', description: 'File archiver.' },
          { name: 'WinRAR', url: 'https://www.win-rar.com/start.html?&L=0', description: 'File archiver.' },
          { name: 'Filelight (Windows via KDE neon)', url: 'https://apps.microsoft.com/detail/9pfxcd722m2c', description: 'Disk usage visualizer.' },
          { name: 'WizTree', url: 'https://diskanalyzer.com/', description: 'Fast disk space analyzer.' },
          { name: 'Czkawka', url: 'https://sourceforge.net/projects/czkawka/', description: 'Duplicate file finder.' },
          { name: 'Everything (by voidtools)', url: 'https://www.voidtools.com/', description: 'Instant file search.' },
          { name: 'Advanced Renamer', url: 'https://www.advancedrenamer.com/', description: 'Batch rename files.' },
          { name: 'Dia', url: 'http://dia-installer.de/', description: 'Diagramming software.' },
          { name: 'Mermaid Chart', url: 'https://github.com/mermaid-js/mermaid', description: 'Diagrams from text.' },
          { name: 'Packet Tracer', url: 'https://www.computernetworkingnotes.com/ccna-study-guide/download-packet-tracer-for-windows-and-linux.html', description: 'Network simulation tool.' },
          { name: 'QUCS Studio', url: 'https://qucsstudio.de/', description: 'Circuit simulator.' },
          { name: 'LTSpice', url: 'https://ltspice-iv.en.lo4d.com/windows', description: 'SPICE circuit simulator.' },
          { name: 'ffmpeg', url: 'https://ffmpeg.org/', description: 'Multimedia framework.' },
          { name: 'Err Lookup (Microsoft)', url: 'https://www.microsoft.com/en-us/download/details.aspx?id=100432', description: 'Error code lookup tool.' },
          { name: 'ExifTool', url: 'https://exiftool.org/', description: 'Read/write metadata in files.' },
          { name: 'Picard Geotag', url: 'https://www.picageotag.com/en/download/', description: 'Geotag photos.' },
          { name: 'Pandoc', url: 'https://pandoc.org/', description: 'Universal document converter.' },
          { name: 'pdfcpu', url: 'https://pdfcpu.io/', description: 'PDF processor.' },
          { name: 'XpdfTools', url: 'https://www.xpdfreader.com/', description: 'PDF utilities.' },
          { name: 'Tokei', url: 'https://github.com/XAMPPRocky/tokei', description: 'Code statistics program.' },
          { name: 'Sleek', url: 'https://github.com/ransome1/sleek/releases', description: 'Todo.txt manager.' },
        ],
      },
    ],
  },
  {
    id: 'linux',
    name: 'Linux Based',
    icon: { component: LinuxIcon, props: { className: "w-8 h-8 mr-3 text-yellow-400" } },
    categories: [
      {
        name: 'Essential Tools',
        apps: [
          { name: 'Git', url: 'https://git-scm.com/download/linux', description: 'Version control system.' },
          { name: 'htop', url: 'https://htop.dev/', description: 'Interactive process viewer.' },
          { name: 'Neofetch', url: 'https://github.com/dylanaraps/neofetch', description: 'System information tool.' },
          { name: 'exa', url: 'https://the.exa.website/', description: 'Modern replacement for `ls`.' },
        ],
      },
      {
        name: 'Browsers',
        apps: [
          { name: 'Brave', url: 'https://brave.com/linux/', description: 'Privacy-focused browser.' },
          { name: 'Firefox', url: 'https://www.mozilla.org/firefox/linux/', description: 'Open-source browser.' },
          { name: 'Tor Browser', url: 'https://www.torproject.org/download/', description: 'For anonymous browsing.' },
          { name: 'LibreWolf', url: 'https://librewolf.net/', description: 'Firefox fork focused on privacy.' },
          { name: 'Waterfox', url: 'https://www.waterfox.net/', description: 'Firefox-based browser.' },
        ],
      },
      {
        name: 'Customization (KDE)',
        apps: [
          { name: 'Edna Theme', url: 'https://store.kde.org/p/1367064/', description: 'KDE Plasma theme (example).' },
          { name: 'Kvantum Manager', url: 'https://github.com/tsujan/Kvantum', description: 'SVG-based theme engine for Qt.' },
          { name: 'Latte Dock', url: 'https://invent.kde.org/plasma/latte-dock', description: 'Advanced dock for Plasma.' },
        ],
      },
      {
        name: 'Hardware & System Info',
        apps: [
          { name: 'KDE Info Center', url: 'https://apps.kde.org/kinfocenter/', description: 'System information for KDE.' },
          { name: 'GSmartControl', url: 'https://gsmartcontrol.sourceforge.io/home/index.php/en/Downloads', description: 'HDD/SSD health inspection tool.' },
          { name: 'System Profiler and Benchmark', url: 'https://apps.ubuntu.com/cat/applications/hardinfo/', description: 'System profiler (HardInfo).' },
        ],
      },
      {
        name: 'Code/Text Editors & IDEs',
        apps: [
          { name: 'VSCodium', url: 'https://vscodium.com/', description: 'Community-driven, FLOSS version of VS Code.' },
          { name: 'Arduino IDE', url: 'https://www.arduino.cc/en/software', description: 'IDE for Arduino boards.' },
          { name: 'Android Studio', url: 'https://developer.android.com/studio', description: 'IDE for Android development.' },
          { name: 'Kate', url: 'https://kate-editor.org/', description: 'Advanced text editor by KDE.' },
          { name: 'Trilium Notes', url: 'https://github.com/zadam/trilium', description: 'Hierarchical note-taking application.' },
          { name: 'Logseq', url: 'https://logseq.com/', description: 'Privacy-first, open-source knowledge base.' },
        ],
      },
      {
        name: 'Content Creation',
        apps: [
          { name: 'Blender', url: 'https://www.blender.org/download/', description: '3D creation suite.' },
          { name: 'OpenSCAD', url: 'https://openscad.org/download.html', description: 'Script-based 3D modeler.' },
          { name: 'FreeCAD', url: 'https://www.freecadweb.org/downloads.php', description: 'Parametric 3D modeler.' },
          { name: 'Audacity', url: 'https://www.audacityteam.org/download/linux/', description: 'Audio editor and recorder.' },
          { name: 'GIMP', url: 'https://www.gimp.org/downloads/', description: 'Image manipulation program.' },
          { name: 'Fritzing', url: 'https://fritzing.org/download/', description: 'Electronics design tool.' },
          { name: 'Inkscape', url: 'https://inkscape.org/release/inkscape-1.3.2/gnulinux/', description: 'Vector graphics editor.' },
          { name: 'Krita', url: 'https://krita.org/en/download/', description: 'Digital painting software.' },
          { name: 'LMMS', url: 'https://lmms.io/download#linux', description: 'Digital audio workstation.' },
        ],
      },
      {
        name: 'Game Stores & Launchers',
        apps: [
          { name: 'Steam', url: 'https://store.steampowered.com/about/', description: 'Game distribution platform.' },
          { name: 'Heroic Games Launcher', url: 'https://heroicgameslauncher.com/', description: 'Launcher for Epic Games & GOG.' },
        ],
      },
      {
        name: 'Social Media & Communication',
        apps: [
          { name: 'Telegram Desktop', url: 'https://desktop.telegram.org/', description: 'Fast and secure messaging.' },
          { name: 'Discord', url: 'https://discord.com/download', description: 'Voice, video, and text chat.' },
          { name: 'Zoom', url: 'https://zoom.us/download?os=linux', description: 'Video conferencing.' },
          { name: 'Signal Desktop', url: 'https://signal.org/download/', description: 'Secure messaging app.' },
          { name: 'Rambox', url: 'https://rambox.app/#download', description: 'Workspace for multiple services.' },
          { name: 'Element', url: 'https://element.io/get-started', description: 'Secure Matrix client.' },
          { name: 'OnionShare', url: 'https://onionshare.org/', description: 'Securely and anonymously share files.' },
        ],
      },
      {
        name: 'Image Burners & USB Tools',
        apps: [
          { name: 'mkusb', url: 'https://help.ubuntu.com/community/mkusb', description: 'Tool to create bootable USB drives.' },
          { name: 'Balena Etcher', url: 'https://etcher.balena.io/', description: 'Flash OS images.' },
          { name: 'Impression', url: 'https://flathub.org/apps/details/io.gitlab.adhami3310.Impression', description: 'Linux drive flashing utility.' },
        ],
      },
      {
        name: 'Media Players/Viewers/Managers',
        apps: [
          { name: 'digiKam', url: 'https://www.digikam.org/download/binary/', description: 'Photo management software.' },
          { name: 'darktable', url: 'https://www.darktable.org/install/', description: 'Virtual lighttable and darkroom.' },
          { name: 'Okular', url: 'https://okular.kde.org/download/', description: 'Universal document viewer.' },
          { name: 'VLC', url: 'https://www.videolan.org/vlc/download-linux.html', description: 'Versatile media player.' },
          { name: 'Lollypop', url: 'https://wiki.gnome.org/Apps/Lollypop', description: 'GNOME music player.' },
          { name: 'Elisa', url: 'https://elisa.kde.org/', description: 'KDE music player.' },
        ],
      },
      {
        name: 'Programming Languages & Compilers',
        apps: [
          { name: 'Python 3', url: 'https://www.python.org/downloads/', description: 'Often pre-installed or via package manager.' },
          { name: 'GCC (GNU Compiler Collection)', url: 'https://gcc.gnu.org/', description: 'Compiler suite (C, C++, etc.).' },
          { name: 'Flutter', url: 'https://docs.flutter.dev/get-started/install/linux', description: 'UI toolkit.' },
        ],
      },
      {
        name: 'Office Suites',
        apps: [
          { name: 'LibreOffice', url: 'https://www.libreoffice.org/download/download-libreoffice/', description: 'Free office suite.' },
          { name: 'ONLYOFFICE Desktop Editors', url: 'https://www.onlyoffice.com/download-desktop.aspx', description: 'Office suite.' },
        ],
      },
      {
        name: 'File Transfer & Sharing',
        apps: [
          { name: 'FileZilla', url: 'https://filezilla-project.org/download.php?platform=linux', description: 'FTP client.' },
          { name: 'LocalSend', url: 'https://localsend.org/#/download', description: 'Share files across devices locally.' },
          { name: 'qBittorrent', url: 'https://www.qbittorrent.org/download.php', description: 'Torrent client.' },
          { name: 'KDE Connect', url: 'https://kdeconnect.kde.org/', description: 'Integrate phone and computer.' },
        ],
      },
      {
        name: 'Game Engines',
        apps: [
          { name: 'Godot Engine', url: 'https://godotengine.org/download/linux/', description: 'Free and open-source game engine.' },
          { name: 'Unreal Engine', url: 'https://www.unrealengine.com/en-US/linux', description: 'Powerful game engine.' },
        ],
      },
      {
        name: 'Network Tools (CLI & GUI)',
        apps: [
          { name: 'Wireshark', url: 'https://www.wireshark.org/download.html', description: 'Network protocol analyzer.' },
          { name: 'Angry IP Scanner', url: 'https://angryip.org/download/#linux', description: 'Network scanner.' },
          { name: 'Nmap', url: 'https://nmap.org/download.html', description: 'Network scanner and security auditor.' },
          { name: 'net-tools', url: 'https://sourceforge.net/projects/net-tools/', description: 'Utilities like ifconfig, route (often pre-installed).' },
        ],
      },
      {
        name: 'Terminal Enhancements & Utilities',
        apps: [
          { name: 'Midnight Commander', url: 'https://midnight-commander.org/', description: 'Console file manager.' },
        ],
      },
      {
        name: 'Other Utilities',
        apps: [
          { name: 'HandBrake', url: 'https://handbrake.fr/downloads.php', description: 'Video transcoder.' },
          { name: 'VirtualBox', url: 'https://www.virtualbox.org/wiki/Linux_Downloads', description: 'Virtualization software.' },
          { name: 'OBS Studio', url: 'https://obsproject.com/download', description: 'Screen recording and streaming.' },
          { name: 'TextExtractor (OCR)', url: 'https://github.com/dynobo/normcap', description: 'OCR tool (NormCap as an example).' },
          { name: 'VeraCrypt', url: 'https://www.veracrypt.fr/en/Downloads.html', description: 'Disk encryption software.' },
          { name: 'Ultimaker Cura', url: 'https://ultimaker.com/software/ultimaker-cura/', description: '3D printing slicer.' },
          { name: 'Logisim Evolution', url: 'https://github.com/logisim-evolution/logisim-evolution', description: 'Digital logic circuit simulator.' },
          { name: 'Kalzium', url: 'https://apps.kde.org/kalzium/', description: 'Periodic table application.' },
          { name: 'Koodo Reader', url: 'https://koodo.960960.xyz/', description: 'Ebook reader.' },
          { name: 'Dia', url: 'http://dia-installer.de/download/linux.html', description: 'Diagramming software.' },
          { name: 'SpeedCrunch', url: 'https://speedcrunch.org/', description: 'High-precision scientific calculator.' },
          { name: 'Ultimate Media Downloader (yt-dlp GUI)', url: 'https://github.com/mansoorbarri/Ultimate-Media-Downloader', description: 'GUI for yt-dlp.' },
          { name: 'Czkawka', url: 'https://github.com/qarmin/czkawka', description: 'Duplicate file finder.' },
        ],
      },
    ],
  },
  {
    id: 'macos',
    name: 'macOS',
    icon: { component: AppleIcon, props: { className: "w-8 h-8 mr-3 text-gray-400 dark:text-gray-300" } },
    categories: [
      {
        name: 'Development',
        apps: [
          { name: 'Xcode', url: 'https://developer.apple.com/xcode/', description: 'IDE for Apple platforms.' },
          { name: 'Homebrew', url: 'https://brew.sh/', description: 'Package manager for macOS.' },
        ],
      },
      {
        name: 'Code/Text Editors & IDEs',
        apps: [
          { name: 'Logseq', url: 'https://logseq.com/', description: 'Privacy-first, open-source knowledge base.' },
        ],
      },
      {
        name: 'Browsers',
        apps: [
            { name: 'Arc Browser', url: 'https://arc.net/', description: 'Innovative new browser.' },
            { name: 'Brave', url: 'https://brave.com/download/', description: 'Privacy-focused browser.' },
            { name: 'Firefox', url: 'https://www.mozilla.org/en-US/firefox/mac/', description: 'Open-source browser.' },
        ],
      },
      {
        name: 'Utilities',
        apps: [
          { name: 'LocalSend', url: 'https://apps.apple.com/us/app/localsend/id1661733229?platform=mac', description: 'Share files locally.' },
          { name: 'Rectangle', url: 'https://rectangleapp.com/', description: 'Window management.' },
          { name: 'Alfred', url: 'https://www.alfredapp.com/', description: 'Productivity app with custom workflows.' },
        ],
      },
       {
        name: 'Content Creation',
        apps: [
          { name: 'Blender', url: 'https://www.blender.org/download/', description: '3D creation suite.' },
          { name: 'GIMP', url: 'https://www.gimp.org/downloads/', description: 'Image manipulation program.' },
          { name: 'Inkscape', url: 'https://inkscape.org/release/inkscape-1.3.2/mac-os-x/', description: 'Vector graphics editor.' },
        ],
      }
    ],
  },
  {
    id: 'web-tools',
    name: 'Web Based Tools',
    icon: { component: WebIcon, props: { className: "w-8 h-8 mr-3 text-green-500" } },
    categories: [
      {
        name: 'Productivity & Utilities',
        apps: [
          { name: 'Workona', url: 'https://workona.com/', description: 'Browser tab and workspace manager.' },
          { name: 'Badeel.wiki', url: 'https://www.badeel.wiki', description: 'Find alternatives to products.' },
          { name: 'Code to Image', url: 'https://codetoimg.com/', description: 'Convert code snippets to images.' },
          { name: 'TTSMP3', url: 'https://ttsmp3.com/', description: 'Text-to-speech converter.' },
          { name: 'iLovePDF', url: 'https://www.ilovepdf.com/', description: 'Online PDF tools.' },
          { name: 'ImageResizer.com', url: 'https://imageresizer.com/', description: 'Online image resizer.' },
          { name: 'TinyWow', url: 'https://tinywow.com/', description: 'Various free online tools.' },
          { name: 'Vectorizer.ai', url: 'https://vectorizer.ai/', description: 'Convert images to SVG vectors.' },
          { name: 'Resumake.io', url: 'https://resumake.io/', description: 'Free resume maker.' },
          { name: 'OnlineOCR', url: 'https://www.onlineocr.net/', description: 'Image to text converter (OCR).' },
          { name: 'Dynamic Drive Favicon Tool', url: 'http://tools.dynamicdrive.com/favicon/', description: 'Create favicons.' },
          { name: 'CamelCamelCamel', url: 'https://camelcamelcamel.com/', description: 'Amazon price tracker.' },
        ],
      },
      {
        name: 'Electronics & Engineering',
        apps: [
          { name: 'Falstad Circuit Simulator', url: 'https://www.falstad.com/circuit/', description: 'Electronic circuit simulator.' },
          { name: 'Tinkercad Circuits', url: 'https://www.tinkercad.com/', description: 'Online electronics and 3D design.' },
          { name: 'EasyEDA', url: 'https://easyeda.com/', description: 'Online PCB design tool.' },
          { name: 'Digi-Key Calculators', url: 'https://www.digikey.com/en/resources/online-conversion-calculators', description: 'Online conversion calculators.' },
          { name: 'Bitmap Converter (MarlinFW)', url: 'https://marlinfw.org/tools/u8glib/converter.html', description: 'For small displays.' },
          { name: 'WintelGuy SSD Endurance Calc', url: 'https://wintelguy.com/endurance-calc.pl', description: 'SSD useful life calculator.' },
          { name: 'PPI Calculator', url: 'https://www.calculatorsoup.com/calculators/technology/ppi-calculator.php', description: 'Pixels Per Inch calculator.' },
        ],
      },
      {
        name: 'Security Tools',
        apps: [
          { name: 'Walid PassAnalyzer', url: 'https://ahmeddwalid.github.io/Walid-PassAnalyzer/', description: 'Analyze password strength.' },
        ],
      },
      {
        name: 'Miscellaneous Online Tools',
        apps: [
          { name: 'dcode.fr Frequency Analysis', url: 'https://www.dcode.fr/frequency-analysis', description: 'Text frequency analysis.' },
          { name: 'Apowersoft Video Watermark Remover', url: 'https://www.apowersoft.com/video-watermark-remover', description: 'Online video watermark tool.' },
          { name: 'FotoForensics', url: 'https://www.fotoforensics.com/', description: 'Digital image forensics tool.' },
        ],
      },
    ],
  },
  {
    id: 'android',
    name: 'Android Apps',
    icon: { component: AndroidIcon, props: { className: "w-8 h-8 mr-3 text-green-400" } },
    categories: [
      {
        name: 'Communication & Social',
        apps: [
          { name: 'Signal', url: 'https://signal.org/download/android/', description: 'Secure messaging.' },
          { name: 'KDE Connect', url: 'https://f-droid.org/en/packages/org.kde.kdeconnect_tp/', description: 'Integrate phone and desktop.' },
        ],
      },
      {
        name: 'Utilities',
        apps: [
          { name: 'Google Clock', url: 'https://play.google.com/store/apps/details?id=com.google.android.deskclock', description: 'Clock, alarm, timer.' },
          { name: 'LocalSend', url: 'https://f-droid.org/en/packages/org.localsend.localsend_app/', description: 'Share files locally.' },
          { name: 'URL Check', url: 'https://f-droid.org/en/packages/com.trianguloy.urlchecker/', description: 'Check URLs before opening.' },
          { name: 'Leon - URL Cleaner', url: 'https://f-droid.org/en/packages/com.svenjacobs.app.leon/', description: 'Clean tracking parameters from URLs.' },
          { name: 'Open in Browser', url: 'https://f-droid.org/en/packages/ru.gelin.android.browser.open/', description: 'Force links to open in browser.' },
          { name: 'FFShare', url: 'https://f-droid.org/en/packages/com.caydey.ffshare/', description: 'Share files via Firefox Send (archive).' },
          { name: 'App Manager', url: 'https://f-droid.org/en/packages/io.github.muntashirakon.AppManager/', description: 'Manage installed applications.' },
          { name: 'FlorisBoard', url: 'https://f-droid.org/en/packages/dev.patrickgold.florisboard/', description: 'Open-source keyboard.' },
          { name: 'Material Files', url: 'https://f-droid.org/en/packages/me.zhanghai.android.files/', description: 'Material Design file manager.' },
          { name: 'Fossify File Manager', url: 'https://f-droid.org/en/packages/org.fossify.filemanager/', description: 'Simple file manager.' },
          { name: 'Data Monitor', url: 'https://f-droid.org/en/packages/com.drnoob.datamonitor/', description: 'Monitor network data usage.' },
          { name: 'Untracker', url: 'https://f-droid.org/en/packages/me.zhanghai.android.untracker/', description: 'Remove trackers from URLs.' },
          { name: 'Smart AutoClicker', url: 'https://f-droid.org/en/packages/com.buzbuz.smartautoclicker/', description: 'Automate screen taps.' },
          { name: 'Calculator (Neumorphic)', url: 'https://f-droid.org/en/packages/com.neumorphic.calculator/', description: 'Stylish calculator.' },
          { name: 'Google Calculator', url: 'https://play.google.com/store/apps/details?id=com.google.android.calculator', description: 'Simple calculator by Google.' },
          { name: 'Microsoft Authenticator', url: 'https://play.google.com/store/apps/details?id=com.azure.authenticator', description: 'Two-factor authentication.' },
          { name: 'Tasks.org', url: 'https://tasks.org/', description: 'Open-source todo list & task manager.' },
        ],
      },
      {
        name: 'Media & Content',
        apps: [
          { name: 'Quran.com App', url: 'https://quran.com/apps', description: 'Open Source Quran app.' },
          { name: 'Google Snapseed', url: 'https://play.google.com/store/apps/details?id=com.niksoftware.snapseed', description: 'Photo editor by Google.' },
          { name: 'MediaInfo', url: 'https://play.google.com/store/apps/details?id=net.mediaarea.mediainfo', description: 'Media file information.' },
          { name: 'Seal (Video/Audio Downloader)', url: 'https://f-droid.org/en/packages/com.junkfood.seal/', description: 'Download media from various sites.' },
          { name: 'Video Transcoder', url: 'https://f-droid.org/en/packages/protect.videoeditor/', description: 'Convert video formats.' },
          { name: 'ViMusic', url: 'https://f-droid.org/en/packages/it.vfsfitvnm.vimusic/', description: 'Stream music from YouTube Music.' },
          { name: 'Oto Music', url: 'https://play.google.com/store/apps/details?id=com.piyush.music', description: 'Offline music player.' },
          { name: 'Fossify Gallery', url: 'https://f-droid.org/en/packages/org.fossify.gallery/', description: 'Simple photo gallery.' },
          { name: 'PDF Converter', url: 'https://f-droid.org/en/packages/swati4star.createpdf/', description: 'Convert images and text to PDF.' },
          { name: 'URL to PDF', url: 'https://f-droid.org/en/packages/com.prostudio.urltopdfconverter/', description: 'Convert webpages to PDF.' },
          { name: 'VLC for Android', url: 'https://f-droid.org/en/packages/org.videolan.vlc/', description: 'Versatile media player.' },
          { name: 'MPV for Android', url: 'https://f-droid.org/en/packages/is.xyz.mpv/', description: 'Lightweight media player.' },
          { name: 'Image Toolbox', url: 'https://f-droid.org/en/packages/ru.tech.imageresizershrinker/', description: 'Resize, compress, convert images.' },
        ],
      },
      {
        name: 'Education',
        apps: [
          { name: 'Busuu', url: 'https://play.google.com/store/apps/details?id=com.busuu.android.enc', description: 'Language learning app.' },
        ]
      }
    ],
  },
  {
    id: 'ios',
    name: 'iOS Apps',
    icon: { component: AppleIcon, props: { className: "w-8 h-8 mr-3 text-gray-500" } },
    categories: [
      {
        name: 'Utilities & Communication',
        apps: [
          { name: 'Quran.com App', url: 'https://quran.com/apps', description: 'Open Source Quran app.' },
          { name: 'LocalSend', url: 'https://apps.apple.com/us/app/localsend/id1661733229?platform=iphone', description: 'Share files locally.' },
          { name: 'Signal', url: 'https://signal.org/install/', description: 'Secure messaging.' },
        ],
      },
    ],
  },
  {
    id: 'misc-extensions',
    name: 'Miscellaneous',
    icon: { component: PuzzleIcon, props: { className: "w-8 h-8 mr-3 text-purple-500" } },
    categories: [
      {
        name: 'Microsoft Word Plugins',
        apps: [
          { name: 'Add Quran to MS Word', url: 'https://arabic101.org/product/add-the-quran-to-your-microsoft-word-2/', description: 'Integrate Quranic text into Word.' },
        ],
      },
      {
        name: 'VS Code Extensions',
        apps: [
          { name: 'PlatformIO IDE', url: 'https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide', description: 'Embedded development.' },
          { name: 'Console Ninja', url: 'https://marketplace.visualstudio.com/items?itemName=WallabyJs.console-ninja', description: 'Display console.log output in editor.' },
          { name: 'Code Runner', url: 'https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner', description: 'Run code snippets.' },
          { name: 'C/C++ Extension Pack', url: 'https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack', description: 'C/C++ development tools.' },
          { name: 'Python Extension Pack', url: 'https://marketplace.visualstudio.com/items?itemName=ms-python.python', description: 'Python development tools.' },
          { name: 'Extension Pack for Java', url: 'https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack', description: 'Java development tools.' },
          { name: 'GitLens', url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens', description: 'Git supercharged.' },
          { name: 'Git Graph', url: 'https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph', description: 'View Git history graph.' },
          { name: 'Git History', url: 'https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory', description: 'View Git log, file history.' },
          { name: 'HTML CSS Support', url: 'https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css', description: 'CSS intellisense for HTML.' },
          { name: 'Go', url: 'https://marketplace.visualstudio.com/items?itemName=golang.Go', description: 'Go language support.' },
          { name: 'Markdown All in One', url: 'https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one', description: 'Markdown editing features.' },
          { name: 'Markdown PDF', url: 'https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf', description: 'Convert Markdown to PDF.' },
          { name: 'Markdown Preview Enhanced', url: 'https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced', description: 'Advanced Markdown preview.' },
          { name: 'Material Theme', url: 'https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme', description: 'Material Design themes.' },
          { name: 'Rainglow', url: 'https://marketplace.visualstudio.com/items?itemName=daylerees.rainglow', description: 'Collection of color themes.' },
          { name: 'Material Icon Theme', url: 'https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme', description: 'Material Design icons.' },
          { name: 'GitHub Theme', url: 'https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme', description: 'GitHub themes.' },
          { name: 'HTML Boilerplate', url: 'https://marketplace.visualstudio.com/items?itemName=sidthesloth.html5-boilerplate', description: 'Generate HTML5 boilerplate.' },
          { name: 'Prettier - Code formatter', url: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode', description: 'Opinionated code formatter.' },
          { name: 'vscode-pets', url: 'https://marketplace.visualstudio.com/items?itemName=tonybaloney.vscode-pets', description: 'Pets in your VS Code.' },
          { name: 'Random Everything', url: 'https://marketplace.visualstudio.com/items?itemName=helixquar.random-everything', description: 'Generate random data.' },
          { name: 'Snippet Creator', url: 'https://marketplace.visualstudio.com/items?itemName=cschlosser.snippet-creator', description: 'Create custom snippets easily.' },
          { name: 'Image preview', url: 'https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview', description: 'Preview images in gutter.' },
          { name: 'Excel Viewer', url: 'https://marketplace.visualstudio.com/items?itemName=GrapeCity.gc-excelviewer', description: 'View CSV and Excel files.' },
          { name: 'Live Server', url: 'https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer', description: 'Launch a local development server.' },
        ],
      },
    ],
  },
];
