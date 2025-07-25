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

© 2025 pokemon-ace-notes contributors.

The content of pokemon-ace-notes is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1), the license can also be found in [LICENSE](LICENSE). For the purposes of porting this content to Glitch City Wiki, the content of pokemon-ace-notes is also licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/), the license can also be found in [LICENSE-GLITCH-CITY](LICENSE-GLITCH-CITY).

Underlying source code used to display the content is licenced under the MIT licence, which can be found in [LICENSE-CODE](LICENSE-CODE).
