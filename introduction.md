# Get started

Isomer is made of a few services. 
### Github
This is where you **edit** your content. Most of the tutorial in this section will cover tips and tricks on how you edit your site on Github

### Netlify
This is where your **sites are hosted**. All the content pages on Github are pulled by Netlify and it builds your site into html pages that users see on browsers. 
You don't have to know too much about this as this part is handled by the isomer team. 
### KeyCDN
As the name suggests, KeyCDN is a CDN (Content Delivery Network) service. It makes sure that your site is always up, fast and it also protects against DDoS (Distributed denial of service) attacks. KeyCDN is also where we install your SSL certs and your site content is served whenever a user hits your url such as www.isomer.gov.sg.

To start using isomer, follow the steps listed below. 

## 1. Create a Github account

### Sign up

Go to <https://github.com/>{:target="_blank"}. Proceed to sign up for an account using your preferred email address and a professional username. The email address used must be connected to the internet.

![Screenshot of GitHub's registration page with details filled in](/assets/github-setup/1.png)

### Select the free plan

You will only need a basic account on GitHub to edit the content of your Isomer website.

Under 'Choose your subscription', select 'Free' to opt for the free plan.

Click on 'Continue' when the correct option is selected.  

![Screenshot of GitHub's plan selection page with the free plan selected](/assets/github-setup/2.png)

### Tailor your experience

You do not need to tailor experience at this moment. Click on 'skip this step'.

![Screenshot of GitHub's experience tailoring page with the skip this step link on the bottom left circled](/assets/github-setup/3.png)

### Verify your email

![Screenshot of the GitHub email verification prompt](/assets/github-setup/4-1.png)

After signing up, go to your registered email address. You would've received an email to verify your email address.

![Screenshot of the GitHub registration email](/assets/github-setup/4-2.png)

Proceed with the verification.

Upon returning to GitHub, you will see a banner notification that your email is verified.

![Screenshot of the GitHub banner saying 'Your email was verified'](/assets/github-setup/4-3.png)

### Go to your settings

After verification, you will need to do some additional set-up.

Go to your account settings by clicking on your profile picture on the top right hand corner of the page.

Select 'Settings' and you will be redirected to a new page.

![Screenshot of the GitHub with the settings option on the top right selected](/assets/github-setup/5.png)

On the left-hand side of the page, look for the 'Security' tab and select it. Here, we will be setting up two-factor authentication (2FA).

![Screenshot of the GitHub settings page with the Security tab selected](/assets/github-setup/6.png)

### Enable 2FA

Before working on Isomer websites, you will have to set up two-factor authentication (2FA) to secure your account. Note that 2FA is required for all Isomer repositories.

Click on ‘Enable two-factor authentication’ to proceed.

![Screenshot of the GitHub 'enable two-factor authentication' button](/assets/github-setup/7.png)

### Choose 2FA authentication method

Select a 2FA authentication method. You have a choice between using an app (such as [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2), [Authy](https://authy.com/), or [LastPass](https://www.lastpass.com/)), or via an SMS message.

![Screenshot of the GitHub 2FA selection page](/assets/github-setup/8.png)

### Save your recovery codes

GitHub will prompt you to save your recovery codes. The purpose of these codes are to gurantee you are the owner of your account in case your 2FA fails, such as when you lose your phone.

We strongly encourage saving these codes somewhere secure.

After selecting one of the methods to save the codes, the 'Next' button will be enabled. Proceed.

![Screenshot of the GitHub recovery codes](/assets/github-setup/9.png)

### Complete 2FA setup

Set up your 2FA as prompted by GitHub. You'll be prompted for a 'trial run' of your 2FA, where you must enter the generated 2FA code to make sure that your 2FA setup is working in order to proceed. Once done, click 'Enable' to enable 2FA on your account.

You will then see a banner notifying you that 'Two-factor authentication successfully enabled'.

![Screenshot of the GitHub banner saying 'Two-factor authentication successfully enabled'](/assets/github-setup/10.png)

Now you are ready to gain access to your Isomer website repository.

### Request an invite

Now that your account is all set up. You will need an invite to make edits to your website.

To gain access, email the Isomer Team at <admin@isomer.gov.sg> with your GitHub username and website.

Upon being added to the repository, you will receive an invite on your registered email.

![Screenshot of the GitHub email invite](/assets/github-setup/11.png)

### Accept the invitation

Click on 'Join Isomer' and you are all set!

![Screenshot of the GitHub invitation acceptance page](/assets/github-setup/12.png)

You will now see a banner notifying you 'You are now a member of Isomer!'

![Screenshot of the GitHub banner saying 'You are now a member of Isomer!'](/assets/github-setup/13.png)

That's all! Read on to find out how you can make your first edit to your site!

## 2. Making your first edit

Now that you've set up your GitHub account, let's get down to making changes! 

**Make sure that you've gotten the isomer team to add you into the relevant repository on Github before making your first edit.** 

First, head down to your site's GitHub repository. A repository is like a Google Drive folder where your site's content and data is stored. 

In this quide, we'll use the FAQ page for you to make your first edit.
Make sure you're in the `staging` branch. If you aren't, click the dropdown menu and select `staging`.

Open the `pages` folder, and click on `faq.md`. Once in, click the edit button (an icon that looks like a pencil).

The content of Isomer sites are written in Markdown. You can ignore the stuff at the top of the page, between the pair of triple dashes (`---`). Type something after the second set of triple dashes. The file should now look something like this:

```markdown
---
title: FAQ
permalink: /faq/
---
Hello, Isomer! This is my very first edit!
```

Scroll to the bottom of the page, and add a simple note of the changes you've made under 'Update faq.md'. You can also add more details in the subsequent large text box. **Make sure the option 'Commit directly to the `staging` branch.' is selected, and click 'Commit changes'.**

Wait for about a few minutes, then head to your site's staging site (which is provided by the isomer team, it typically has this format https://yoursite-staging.netlify.app. On the staging site, head to the FAQ page. 

Congratulations! You have just made your very first edit to an Isomer site!

The moment a commit is made on GitHub, GitHub sends the updated content of your site to [Netlify](https://www.netlify.com/) that we use to build Isomer sites. Netlify then downloads the central Isomer theme, weaves your content into the theme, building a complete site. This build process usually take less than a minute for most Isomer sites, but larger Isomer sites can take up to 5 minutes.

You might also remember that you were asked to make sure that you are in the `staging` branch of the repository. Isomer sites will always have at least 2 branches - `staging` and `master`. The `staging` branch is where you can make edits freely without affecting your live site. Your changes can be previewed on the staging URL, which is also separate from your live site.

When you're happy with your changes and want to push them to your live site, open a pull request to the `master` branch. A pull request is essentially a request to update the content of the `master` branch to be in sync with the `staging` branch. To prevent defacement or other security incidents, we have instituted a policy where your pull request must be approved by at least 1 other user who can edit your site. We'll cover more about this in the later part of the tutorial.

## 3. Creating a new page

The next step after editing your first page is to create a new page! As you might recall, each Isomer Markdown file look something like this:

```markdown
---
title: FAQ
permalink: /faq/
---
Hello, Isomer! This is my very first edit!
```

The stuff between the 2 sets of triple dashes is called the *front matter*. The front matter is where you configure the title and url for each page. Most pages will only have these 2 options (`title` and `permalink`), but some pages, like the [home page](/configuration/home/overview/) and [contact us page](/configuration/contact/overview/), have more.

**Note that permalink refers to the url of that particular page on your site. You will notice that permalink looks like this `permalink: /my-page`. This is because it is assumed that the full url always starts with www.your-site-name.gov.sg, which is why we omit the first part and only include the part of the url after your main domain.**

![Screenshot of Isomer page with the permalink and title labelled](/assets/page-anatomy.png)

Now that you know about the front matter, let's get started creating your new page! 

Head to the staging branch, and go into the `pages` folder. Click the 'Create new file' button (it's to the upper right hand corner). Give a file a name, such as `myfirstpage.md`. Note that your page is in Markdown format, hence the file name must end in `.md`. GitHub won't be able to automatically add that for you!

![Creating a new file in your repository](/assets/resources/creating-a-new-file-in-your-repository.gif)

Now that you have named the file, you're free to add your content. Feel free to copy and paste the Markdown above, or write your own! If your site already has a page with the permalink `/faq/`, remember to change the permalink to something else! One of the 2 pages will not be accessible if they have the same permalinks.

Once you're done, enter a commit message, make sure the 'Commit directly to the `staging` branch.' option is selected, and hit the green commit button. Just as before, your changes are now accessible on the staging site! (you might need to enter the permalink directly into the address bar)

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

