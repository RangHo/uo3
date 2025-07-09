# Utilities of Our Own

**UO3 (Utilities of Our Own)** is a collection of utilities and skins for [Archive of Our Own](https://archiveofourown.org/).

## Skins

You can find site- and work-skins in the following directories:

- `src/lib/siteskins` for site skins; and
- `src/lib/workskins` for work skins.

In each skin directories, you will find a `style.css` file and, optionally, a `preview.svelte` file.
The `style.css` is the actual content of the skin that needs to be pasted into AO3.
The `preview.svelte` file serves two purposes: (i) it provides metadata (like name, author, and description), and (ii) it includes specialized example that showcases each skin the best.

## Utilities

This section is under construction!

## Contribution Guide

If you want to contribute any skins or utilities?
Great!

Follow the instructions below for the types of contribution you want to make.

### Skins

In order to add your own skins in UO3, please follow the following instructions.

#### 1. Prepare the files

First, write your skin CSS file.
In order to be recognized by the website generator, the CSS file must be named `style.css`.

You can also include `preview.svelte` file with metadata and specialized examples.
(You don't need to if you don't want, because there is a default "lorem ipsum" example that demonstrates some common typesetting elements.)
The preview file must start with one module-level `<script>` tag, such as:

```svelte
<script module>
  export const name = 'NAME OF THE SKIN';
  export const author = 'NAME OF THE AUTHOR';
  export const description = 'DESCRIPTION OF THE SKIN';
</script>
```

> [!TIP]
> The `author` and `description` metadata property will be rendered as HTML strings.
> That means, if you want to include a link to your own profile, you can do that by using [an anchor tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a).

From there, you can write whatever HTML code you'd like.

If you know Svelte, technically you can write any Svelte code here.
Any non-HTML preview document will be reviewed before being merged.
For more information about Svelte, visit [svelte.dev](https://svelte.dev/).

Since supplying `preview.svelte` will override the default example, you need to use the following template to include metadata only:

``` svelte
<script module>
  export const name = 'NAME OF THE SKIN';
  export const author = 'NAME OF THE AUTHOR';
  export const description = 'DESCRIPTION OF THE SKIN';
</script>
<script>
  import LoremIpsum from '$lib/components/lorem-ipsum.svelte';
</script>
<LoremIpsum />
```

#### 2. Provide the files to the maintainer

Then, you can send the files to the repository owner via any contact available on their GitHub profile, or create a new "issue" that includes your skin and preview file.

Make sure to include an "ID" of your skin that is comprised of only lowercase alphabets (`[a-z]`), numerics (`[0-9]`), or hyphens (`-`).
This "ID" will be used to access your skin from the website.

#### 3. Fork, upload, and request

> [!NOTE]
> If you're familiar with GitHub, do your thing; I believe you know what you're doing.

Log in to [GitHub](https://github.com/) and clone [this repository](https://github.com/RangHo/uo3) by pressing the _Fork_ button on the upper right hand side.

This should create a "fork" of this repository that you can modify.
Now, go to `src/lib/{siteskins,workskins}` depending on what type of skin it is, and press _Add file_, followed by _Upload files_.

This will create a "commit", and now the top of your forked repository will have some glowing alert that your repository is ahead (or something like that).
It means that your repository has one more "stuff", compared to the original repository.

Press _Contribute_, and you will be presented options to create a _pull request (PR)_.

Done!
The maintainer will review your commits, make adjustments if necessary, and merge your stuff to the original repository.
