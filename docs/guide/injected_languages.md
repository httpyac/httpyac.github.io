
# Injected Languages

The parser logic allows to parse other file formats as well and to determine the respective Http blocks. This makes it possible, for example, to extend Http code blocks from Markdown with httpyac functionality. The idea is that directly from the documentation, the respective endpoints can be tested.

## Markdown

In Markdown, code blocks can be given a language. If this is set to `http`, httpyac activates and offers to send the request.

@[code md{3}](../../examples/injection/markdown.md)


## Asciidoctor

In Asciidoctor, code blocks can be given a language. If this is set to `http`, httpyac activates and offers to send the request.

@[code asciidoctor{3}](../../examples/injection/asciidoctor.adoc)