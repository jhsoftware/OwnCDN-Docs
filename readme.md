# OwnCDN Documentation

The documentation contained in this repository is hosted at <https://owncdn.com/docs>

## Contributions

Contributions are most welcome. No contribution is too big or too small.

Contributors will of course be attributed on our web-site. See the "Contributors" front-matter property below.

Fork this repository, clone locally, make your updates, commit, push, create a pull request in GitHub...

## Repository structure

- Topic files (markdown) are stored in the `docs` folder.\
The name of each topic file is: `<page-ID>.md`.
- A `_TOC.md` file (in the `docs` folder) contains title of the help file and the table of content, and must follow strict formatting (see below).

### Page IDs

Page IDs (in topic file names) are used to link the help buttons in the software to the help file.

### The '_TOC.md' file

Must follow this format - sub-topics indented exactly a multiple of 4 spaces:

```
---
<key>: <value>
<key>: <value>
---
# <Help file title>

- [<Topic title>](<page-id>.md)
- <Title of folder with no page>
    - [<Topic title>](<page-id>.md)
    - [<Topic title>](<page-id>.md)
- [<Title of folder with page>](<page-id>.md)
    - [<Topic title>](<page-id>.md)
    - [<Topic title>](<page-id>.md)
```

### Topic content files

Must follow this format:

```
---
<key>: <value>
<key>: <value>
---
# <Page title>

<Markdown content>
```

### Front-matter

At the top of each file is a section with metadata. This section starts and ends with three dashes (---) on a line by itself.
In other similar documentation projects, this section is in YAML format.
That is also the plan for this project, but we haven't gotten to that just yet.
For now, it is just a line based collection of properties - one property per line.
Each line consisting of a key value pair.

For the '_TOC.md' file, there are 3 required properties:

- **ProductName:** Name of the product that this help file is for.
- **ProductVersion:** Version of the product that this help file is for.
- **DefaultTopic:** The file name of the default topic page.

For topic files, there is one required property:

- **Slug:** The last part of the URL of the web version of this topic page. Must be unique.
 
And topic files may have one of more of these optional properties:  

- **Keywords:** A comma separated list of keywords.
- **Contributors:** Comma separated list of GitHub IDs of contributors  
- **Notes:** Notes / remarks.
- **DocID:** A unique number for the topic - automatically added by compiler if missing.


### Document title

After the front-matter section, there must be exactly one H1 header (#) with the title of the document.

### Special HTML rendering (callouts)

We use blockquotes (lines starting with ">") for special HTML rendering.

If you place one of the following tags following the first ">", the whole blockquote will be rendered as follows:

| Tag           | Blockquote rendering |
| ------------- | --- |
| `[!NOTE]`     | Blue background. Useful information that users should know, even when skimming content.| 
| `[!TIP]`      | Green background. Helpful advice for doing things better or more easily.| 
| `[!IMPORTANT]`| Yellow background. Key information users need to know to achieve their goal. |
| `[!WARNING]`  | Yellow background. Urgent info that needs immediate user attention to avoid problems.|
| `[!CAUTION]`  | Red background. Advises about risks or negative outcomes of certain actions.|

For example:

```
> [!TIP] Wash the car every sunday for best appearances
```

### File inclusion

You can include another markdown file using a link where the text part is `#INCLUDE`.  
This syntax was chosen because it tricks IDEs into checking if the include file exists - and potentially display a warning if not.

```
[#INCLUDE](subfolder/filename.md)
```

### Conditional rendering

The tags `[?EMBED]`, `[?WEB]`, and `[?ANY]` control where the content following each tag is rendered.

Content that follows `[?EMBED]` is rendered in off-line embedded documentation only.

Content that follows `[?WEB]` is rendered in the on-line version only.

Content that follows `[?ANY]` is always rendered.

The default is `[?ANY]`.

### Links

Bare URLs are NOT automatically converted into links.

To have the compiler skip validating a link, you can add `{nocheck}` like this:
```
[this is an invalid link](/path-to-somewhere){nocheck}
```

Bookmarks must be specified like this: `{#bookmark}`



### Copyright notice

All documents in this repository are Copyright &copy; [JH Software](https://jhsoftware.dk).