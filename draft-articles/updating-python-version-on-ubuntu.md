---
title: Updating Python version on Ubuntu
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
date: 2024-01-01
category: general
---

- article about updating python version on ubuntu/wsl
- don't do it. use venv instead. give instructions on venv
- explain why not to update (ubuntu comes installed with a particular version of python and a lot of utils run on it)
- ChatGPT might find a way to do it, but it'll cause you problems that you can't undo

Are you a Linux user? Is your Python version on your machine old? Do you want to update it to a specific version? Can't find a good guide online for how to do it?

Well, you've come to the right place! Though, in fact, my advice is: **don't do it!** You will live to regret it.

This article shows you the correct thing to do instead of upgrading, as well as explaining why you shouldn't do it.

Don't ask ChatGPT for a second opinion. It'll probably tell you how to upgrade Python and will consequently cause you a lot of headaches!

> It's not a good idea to try and upgrade your system's Python version. Instead, simulate an upgrade through the use of virtual environments.

## Why you shouldn't upgrade to a newer version of Python

Your Linux distro comes preinstalled with a bunch of Python code that is built for the version of Python that comes installed with the distro.

Most of that code is probably safe to run on a newer version of Python, but not all of it necessarily is. You will likely end up with a bunch of error messages in your console every time you start your machine from some or other script that fails.

The Python version installed in a system is designed to be fixed.

Python, instead, offers an alternative way to give you access to newer and specific versions: the virtual environment.
