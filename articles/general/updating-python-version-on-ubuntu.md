---
title: Updating Python version on Ubuntu
date: 2025-07-11
category: general
---

Are you a Linux user? Is the Python version on your machine outdated? Do you want to update it to a specific version? Can't find a good guide online for how to do it?

Well, you've come to the right place! Though, in fact, my advice is: **don't do it!** You will live to regret it.

This article shows you the correct thing to do instead of upgrading, as well as explaining why you shouldn't do it.

Don't ask ChatGPT for a second opinion. It'll probably tell you _how_ to upgrade Python and will consequently cause you a lot of headaches! It's irreversible.

> It's not a good idea to try and upgrade your system's Python version. Instead, simulate an upgrade through the use of virtual environments.

## Why you shouldn't upgrade to a newer version of Python

Your Linux distro comes preinstalled with a bunch of Python code that is built for the version of Python that comes installed with the distro.

Most of that code is probably safe to run on a newer version of Python, but not all of it necessarily is. You will likely end up with a bunch of error messages in your console every time you start your machine, from some or other script that fails.

The Python version installed in a system is not supposed to change.

Python, instead, offers an alternative way to give you access to newer and specific versions: the virtual environment.

## Python virtual environments

A virtual environment is an application-specific environment into which you can load project dependencies (including a specific Python version).

It's independent of the system's Python version and allows you to execute code in newer (or older) versions of the language. This means you're not forced to use the system version.

### How to use a virtual environment

First you'll need to create a virtual environment (aka venv) in your project. We're going to put it into a folder in the project's root directory called `venv`.

Open the root directory, then run this command in your terminal:

```bash
python3 -m venv ./venv
```

This creates a virtual environment in the `./venv` directory.

To activate the venv, run this from the root directory:

```bash
. venv/bin/activate
```

You can read more about venvs [here](https://www.w3schools.com/python/python_virtualenv.asp).
