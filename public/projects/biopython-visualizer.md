# Biopython Visualizer

The Biopython Visualizer is a full-stack web application designed to help students, researchers, and anyone interested in bioinformatics analyze and visualize DNA and protein sequence data through an intuitive web interface. Built with React on the frontend and Django on the backend, the application leverages the Biopython library to perform sequence analysis, interact with biological databases, and provide visual representations of genetic information.

## Full-Stack Application

The application features a secure authentication system using JSON Web Tokens (JWT), allowing users to create accounts, securely log in, and maintain a personal collection of DNA and protein sequences for future analysis.

Users can upload FASTA and GenBank files, which are parsed on the backend using Biopython. The extracted sequence data is presented in an easy-to-read format and can be saved to the user's account for later use. In addition to file uploads, users can manually create and manage their own DNA sequences directly within the application.

## Bioinformatics Tools

A primary goal of the project was to expose commonly used bioinformatics tools through an accessible web interface.

The application integrates with NCBI's Entrez API using Biopython, allowing users to search public genetic databases and retrieve detailed information about genes and associated organisms. Sequence records are parsed on the backend and displayed in a simplified format, making complex biological data easier to explore.

Several analysis tools were also implemented, including nucleotide composition calculations, DNA-to-protein translation, and motif searching. The motif search feature allows users to identify recurring sequence patterns within DNA or protein sequences and visualize where those patterns occur.

## Data Visualization

To make biological data easier to interpret, the application incorporates several interactive visualizations.

Three.js and React Three Fiber were used to create immersive 3D visualizations, including an animated DNA model on the landing page and an interactive sequence viewer that highlights motif locations within DNA sequences.

Chart.js was integrated to provide graphical representations of nucleotide composition, allowing users to quickly compare the frequency of each nucleotide within a sequence. These visualizations help transform raw biological data into information that is both engaging and easy to understand.

## API Integration

The project integrates with multiple third-party biological databases to provide access to publicly available genetic and protein information.

Using Biopython's Entrez utilities, the application communicates with NCBI to retrieve nucleotide records based on user searches. An additional UniProt integration allows users to submit one or more protein accession numbers and retrieve detailed protein information, which can then be stored for later analysis. Retrieved protein sequences can be reused throughout the application, including within the motif analysis tools.

## Technical Highlights

<WrappedImageText
imageUrl="/imgs/projects/biopython-visualizer/login.jpg"
imagePosition="start"

>

    <p>

        This project combines modern web development with computational biology, bringing together React, Django, Biopython, Three.js, Chart.js, and REST API integrations into a cohesive application. It demonstrates experience designing secure full-stack applications, integrating third-party scientific APIs, processing complex biological datasets, building interactive visualizations, and creating user-friendly tools that make advanced bioinformatics workflows more accessible.
    </p>

</WrappedImageText>
