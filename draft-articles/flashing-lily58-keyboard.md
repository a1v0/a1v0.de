---
title: How to flash a Lily58 keyboard
date: 2025-07-11
category: general
---

I recently purchased a Lily58 from [Mechboards](https://mechboards.co.uk/). I was about to embark on a typing journey from which I haven't looked back.

When I first received the keyboard, though, I couldn't work out how to flash it. It was a struggle to find a guide that clearly explains what to do, so here's my guide for you!

## Whom this guide is for

This guide is for anybody with a Lily58 keyboard with Pro Micro controllers, where the controllers have a "RESET" button.

If you don't have these things, my solution may still work, but I can't say for sure.

## Installing QMK

First, you'll need to [install QMK](https://msys.qmk.fm/guide). I initially installed regular Windows QMK, but it was extremely slow. I switched to QMK for WSL which worked much better.

Install QMK WSL in your normal Windows system (not on WSL). However, make sure that your `qmk_firmware` is situated in WSL. If not, your keymap compilations will take _forever_.

Now you're ready to create keymaps. You can find out more about this on the [QMK site](https://msys.qmk.fm).

## Flashing your keyboard

Once you've made and compiled a Lily58 keymap with QMK, you'll have a file to load into your keyboard. Most likely, this will have a `.uf2` file extension.

Here's how you flash:

0. Unplug the keyboard from your computer, then disconnect the keyboard halves from each other. **DO NOT** disconnect the keyboard halves until the keyboard has been unplugged from the computer.
1. Plug one keyboard half into the computer.
2. Open the My Computer folder in Windows, and have your `.uf2` file at the ready.
3. Double-press your keyboard half's "RESET" button. Your keyboard will enter flashing mode and it will appear as a storage device in My Computer. (If you can't see the keyboard on your screen, try again with the double=press; it doesn't always work first time.)
4. Paste the `.uf2` file into the keyboard "drive" in My Computer.
5. The drive will disappear from My Computer shortly afterwards and, if you have an OLED, it might turn off and on again.
6. Unplug the keyboard half and repeat the process for the other half.

That's all it takes! Happy typing!
