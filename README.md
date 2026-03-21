# pokemon-ace-notes

A collection of tutorials and guides for arbitrary code execution (ACE) in the Pokémon generation III games.

## Build instructions

The following is required to build the `pokemon-ace-notes` website

*   Python 3
*   Git
*   PowerShell (for Windows) or bash/zsh (for Mac/Linux)

1. Clone the repository: `git clone https://github.com/pomeg-letterbombers/pokemon-ace-notes.git`
2. Change directory: `cd pokemon-ace-notes`
3. Set up a virtual environment: `python -m venv .venv`
4. Activate the virtual environment:
    *   bash/zsh: `source .venv/bin/activate`
    *   PowerShell: `.venv\Scripts\activate.ps1`
    *   Command Prompt: `.venv\Scripts\activate.bat`
5. Install dependencies: `pip install -r requirements.txt`
6. Build the website: `mkdocs build -c -s`

To serve a preview of the website which updates on modification of the pages, run this command: `mkdocs serve`

## Contributing

*   [Create a new issue](https://github.com/pomeg-letterbombers/pokemon-ace-notes/issues)
*   [Create a pull request](https://github.com/pomeg-letterbombers/pokemon-ace-notes/pulls)

## Useful references for contributors

*   [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
*   [MkDocs](https://www.mkdocs.org/)

## Licence

© 2025-2026 Luong Truong (final/togebit) and pokemon-ace-notes contributors.

The content (text and media) of the pokemon-ace-notes website is
distributed under these licenses:

* Creative Commons Attribution-ShareAlike 4.0 International
    + A copy is provided in the LICNESE-CC-BY-SA file.
    + A web copy is also available at https://creativecommons.org/licenses/by-sa/4.0/
* Creative Commons Attribution-NonCommercial 4.0 International
    + A copy is provided in the LICENSE-CC-BY-NC file.
    + A web copy is also available at https://creativecommons.org/licenses/by-nc/4.0/

The source code that builds the website is provided under the
MIT License. A copy is provided in the LICENSE-MIT file.
