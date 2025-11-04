\documentclass[11pt, a4paper]{article}
\usepackage[a4paper, top=2.5cm, bottom=2.5cm, left=2.5cm, right=2.5cm]{geometry}
\usepackage{fontspec}

% FIX: Replaced \babelfont with \setmainfont for standard LuaLaTeX compilation
\setmainfont{Noto Sans}

\usepackage{amsmath}
\usepackage{booktabs}
\usepackage{fancyhdr}
\usepackage{enumitem}

\pagestyle{fancy}
\fancyhead[L]{ICCD Network Infrastructure Upgrade}
\fancyhead[R]{Arfan, A. | September 2025}
\fancyfoot[C]{\thepage}
\renewcommand{\headrulewidth}{0.4pt}
\renewcommand{\footrulewidth}{0.4pt}

\title{\textbf{Technical Report: Network Infrastructure Upgrade}}
\author{Abdulmoiz Arfan \\ \textit{Network Intern, Islamic Community Center of Des Plaines (ICCD)}}
\date{September 2025 -- Present}

\begin{document}

\maketitle
\thispagestyle{fancy} % Apply fancy header/footer to the title page

\begin{abstract}
This report documents the planning, engineering, and configuration efforts for the network infrastructure expansion at the ICCD's new school property. The primary objective was to deploy a robust, high-speed, and secure wireless network. Through strategic implementation of enterprise-grade hardware and software configurations, the project successfully increased \textbf{network bandwidth by $50\%$} and \textbf{coverage by $25\%$}, significantly exceeding initial performance goals.
\end{abstract}

\section{Introduction}
The ICCD's property expansion necessitated a corresponding overhaul and upgrade of the existing network to support increased density of users (students and staff) and data-intensive applications. This project focused on building a reliable, scalable, and secure network foundation to eliminate connectivity dead zones and meet high-demand digital learning requirements.

\section{Project Goals and Quantified Outcomes}
The project was defined by two primary performance metrics. The outcomes were measured against pre-deployment network baselines.

\begin{table}[h]
\centering
\caption{Performance Metrics and Achieved Results}
\label{tab:metrics}
\begin{tabular}{lccc}
\toprule
\textbf{Metric} & \textbf{Target Goal} & \textbf{Achieved Result} & \textbf{Impact Summary} \\
\midrule
Bandwidth Increase & $30\%$ & $50\%$ & Enhanced performance for large file transfers and real-time streaming. \\
Wireless Coverage Area & $20\%$ & $25\%$ & Eliminated critical dead zones across all new construction and classrooms. \\
\bottomrule
\end{tabular}
\end{table}

\section{Implementation and Configuration Details}
The deployment followed a methodical process focused on physical layer reliability and logical network segmentation.

\subsection{Phase 1: Physical Deployment}
\begin{itemize}[leftmargin=*, label=$\bullet$]
    \item \textbf{Cabling Infrastructure:} Oversaw the installation and termination of new \textbf{Cat 6 Ethernet cabling} throughout the property to guarantee sufficient physical layer support for current and future Gigabit speeds.
    \item \textbf{Hardware Deployment:} Deployed and physically mounted \textbf{enterprise-grade wireless access points (APs)}, optimized for high-density environments, to support advanced standards like $\text{802.11ax}$.
\end{itemize}

\subsection{Phase 2: Logical Configuration}
\begin{itemize}[leftmargin=*, label=$\bullet$]
    \item \textbf{Network Segmentation ($\text{VLAN}$s):} Configured \textbf{managed Layer 2 switches} to utilize Virtual Local Area Networks ($\text{VLAN}$s). This process successfully segregated traffic into dedicated networks (e.g., Staff, Student, Guest), significantly improving security and minimizing broadcast domain size.
    \item \textbf{Quality of Service ($\text{QoS}$):} Implemented $\text{QoS}$ policies to prioritize instructional and administrative network traffic (e.g., $\text{VoIP}$, video conferencing) over general user traffic, ensuring critical operations remain highly responsive.
    \item \textbf{Centralized Management:} Implemented a \textbf{centralized network controller system} to streamline the monitoring, maintenance, and policy deployment across all deployed access points.
\end{itemize}

\section{Conclusion and Future Scope}
The Network Infrastructure Upgrade project successfully established a highly scalable, secure, and fast network environment, meeting the technological demands of the ICCD's expansion. The project’s foundational design ensures ease of future maintenance and scalability.

\end{document}

