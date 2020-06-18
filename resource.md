# More about Github, Markdown 

## Github

Over the course of the past few pages, you've created a GitHub account, and have been editing your pages on GitHub. Now, we'll cover what GitHub is and more importantly, how to use it, in more detail.

Each Isomer site has a GitHub repository. A repository is like a dedicated GitHub folder for your site.

![Screenshot of a GitHub Isomer respository](/assets/resources/github.PNG)

GitHub is an online code storage service that many programmers use. It is perfect for storing and collaborating edits to plain text files, such as Markdown, but it supports multimedia files such as Word documents and pictures too. For plain text files, it even tracks the full history of each line, so you can easily go back to find out the author even years after it was written! This makes it perfect for government websites where tracability is important, and also acts as a further line of defence against defacement attacks.

Additionally, we also have a "2 editor policy", where at least 1 other person must review and approve when the live production site is edited.

**IMPORTANT guidelines to follow to manage your repository:**

* Always upload document such as pdf, doc, excel into the files folder
* Always upload images such as png, jpg, gif into the images folder
* Do not upload filename or permalinks that contain spaces. Always replace the spaces with dash (-)

### How to create a file on Github

![Creating a new file in your repository](/assets/resources/creating-a-new-file-in-your-repository.gif)

1. Select your "Staging" Branch
2. Go to the folder that you wish to create a new folder
3. In your repository, click on "Create new file" button
4. Under the "Name your file..." section, put in your file name. Remember to add the file extension (e.g. `.md` for Markdown, `.yml` for YAML)
5. Type or paste the content of the file. Don't forget the front matter if it is a Markdown file
6. Click on "Commit new file" button

### How to upload a file on Github

![How to upload a file to your repository](/assets/resources/how-to-upload-file-to-your-repository.gif)

> NOTE: Always replace spaces in file names with dashes (-)

1. Select your "Staging" Branch
2. In your repository, go to folder that you wish to upload your file
3. Click on "Upload files" button
4. Choose your file. Supported file types include `pdf`, `docx`, `jpg`, `png`, `gif`, and of course, `md` and `yml`
5. Click on "Commit changes" button

### How to edit a file (or a page)

![Editing a file in your repository](/assets/resources/editing-file-to-your-repository.gif)

1. Select your "Staging" Branch
2. In your repository, go to file that you wish to edit
3. Click on "edit" pencil button
4. Edit your file content or name
5. Click on "Commit changes" button

### How to delete a file/page/image 

![Deleting a file in your repository](/assets/resources/deleting-file-to-your-repository.gif)

1. Select your "Staging" Branch
2. In your repository, go to file that you wish to delete
3. Click on "delete" trash button
4. Click on "Commit changes" button

### How to create a new folder

![Creating folder in your repository](/assets/resources/creating-folder-in-your-repository.gif)

1. Select your "Staging" Branch
2. Go to the folder that you wish to create a new folder
3. In your repository, click on "Create new file" button
4. Under the "Name your file..." section, create the directory by specifying folder-name/ignore.md
5. Click on "Commit new file" button

> Remember to delete `ignore.md` after you upload or create at least 1 other file

## What is markdown?

Markdown is a way to style text on the web. All the pages on isomer are in markdown format (as you may have noticed by the .md extension on all your pages). You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is simply regular text with a few non-alphabetic characters thrown in, like `#` or `*`.

For a quick, interactive introduction to Markdown, you can try out the Markdown tutorial at <https://commonmark.org/help/tutorial/>{:target="_blank"}. 


### Quick cheatsheet on Markdown formatting

This is intended as a quick reference and showcase, to aid you as you draft your site's pages. If you're looking for something that isn't covered here, we encourage you to refer to other more comprehensive Markdown guides on the internet. If you still feel you need more assistance, feel free to reach out to us for help through Slack or email.

[StackEdit](https://stackedit.io/app) is free online editor that you can use while you draft your pages.

#### Text

```markdown
This is some normal text. *This sentence is in italics.* This **word** is in bold.
```

The above Markdown will produce:

This is some normal text. *This sentence is in italics.* This **word** is in bold.

#### Headers

Headers are the big titles and subtitles on your page. For example, the headers you have seen so far on this page are "Text" and "Headers". Headers come in levels, with a level 1 header (aka `H1`) the biggest level usually used only for page titles.

```markdown
# This is a level 1 (H1) header!

## This is a level 2 (H2) header!

### This is a level 3 (H3) header!

#### This is a level 4 (H4) header!
```

The above Markdown will produce:

[image of headers](/assets/headers.png)

### Lists

```markdown
1. First ordered list item
2. Another item
  * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the 3 leading spaces which align the raw Markdown.

* Use asterisks for unordered lists, aka bullet points
```

The above Markdown will produce:

1. First ordered list item
2. Another item
  * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces which align the raw Markdown.

* Use asterisks for unordered lists, aka bullet points

#### Links

Links come in several flavours:

```markdown
[I'm a link within the site](/configuration/navbar/overview/)

[I'm an link to an external site](https://www.google.com)

[I'm an link with title - hover your mouse over me!](https://www.google.com "Google's Homepage")

[I'm an link to a file](/assets/sample.pdf)

URLs must be wrapped in angled brackets to turn into links: <http://www.example.com>
```

The above Markdown will produce:

[I'm a link within the site](/configuration/navbar/overview/)

[I'm an link to an external site](https://www.google.com)

[I'm an link with title - hover your mouse over me!](https://www.google.com "Google's Homepage")

[I'm an link to a file](/assets/sample.pdf)

URLs must be wrapped in angled brackets to turn into links: <http://www.example.com>

#### Images

To place an image in your Markdown file, first upload the image into your `/images/` folder. Then use the following Markdown syntax:

```markdown
![alt text - this is a description of what is in the image for people with visual impairments using screen readers](/assets/isomer-logo.svg)

![just like links, you can include titles which appear when hovered](/assets/isomer-logo.svg "Isomer Logo")
```

The above Markdown will produce:

![alt text - this is a description of what is in the image for people with visual impairments using screen readers](/assets/sample-image.jpg)

![just like links, you can include titles which appear when hovered](/assets/sample-image.jpg "Sample Image")

#### Videos

To embed a video on your page, simply copy the iframe code from Youtube or Vimeo after you've uploaded your video, and paste it onto your page like this

![image of iframe code on youtube](/assets/video.png)

```<iframe width="560" height="315" src="https://www.youtube.com/embed/88Ft83XvkSY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>```

The above Markdown will show this:

<iframe width="560" height="315" src="https://www.youtube.com/embed/88Ft83XvkSY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is front matter?

As covered in the earlier section, the front matter is the stuff enclosed in 3 dashes at the top of the page. The front matter is used to configure the settings specific to that page, such as the title and permalink. Certain pages like the homepage and contact us page have more configuration options, such as the content in the hero banner or the contact numbers displayed.

The way the front matter is structured is called [YAML](https://en.wikipedia.org/wiki/YAML){:target="blank"}. You can think of it as a language used to specify data in a way that can be read and understoof by Isomer.

### Front matter syntax

ike all languages, YAML has its own 'grammar', known as syntax. Syntax are a list of rules that you have to follow in order for the YAML to be properly understood. There are quite a number of rules in YAML, but we'll just cover what you need to know.

The most important thing in YAML is the spacing. Certain lines have extra spaces at the front. See this sample extract from a home page's front matter:

```yml
resources:
  title: Media
  subtitle: Learn more
  button: Contact Us
```

In this example, there is a `resources` section. The `title`, `subtitle`, and `button` properties each have 2 spaces at the front. This means that the 3 properties are describing the `resources` section, instead of the whole page.

The next thing you should know about YAML are lists. Here's an extract from a dropdown menu:

```yml
options:
  - title: Option A
    url: /page-a/
  - title: Option B 
    url: /page-b/
  - title: Option C
    url: /page-c/
```

A dropdown menu will have multiple options. This is when we need to use a list. Each item in a list is specified by adding a dash (`-`). Note that `url`, which is part of the option together with `title`, must be vertically aligned with `title`.

This is more or less what you need to know for YAML. Don't worry if you don't know the specific options to use for each page - you can always refer to the [configuration options](/configuration/navbar/overview/) for the details. All you need right now is to understand when the extra spaces are needed, and when lists are needed.

As a final note, if you have special characters like `#` in your YAML, it is a good idea to wrap the entire text in double quotes, like so:

```yml
title: "#hashtags"
```

## Additional resources

#### **Basic concept about Isomer, Github, Markdown**
* [Training Guide for Editor of Content](/files/Editor Isomer Training.pdf){:target="_blank"}
* [Training Guide for Reviewer of Content](/files/Reviewer Training Guide.pdf){:target="_blank"}
<!--- * [Training Guide for Administrator of Github Repository](/files/Administrator Isomer Training.pdf){:target="_blank"} -->


#### **How to setup your Github account**
* [Github Account Setup Guide](/files/Github Account Setup Guide.pdf){:target="_blank"}
