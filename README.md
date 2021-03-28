# Donut
An ASCII drawn spinning donut that can be run either in the terminal or in your browser. Terminal code is written in C, browser code is written in JS using the python http.server library. 

## Notation
Shorthand notation for the files are:
- cmpct = compacted versions of the code that is written in the shape of a donut
- unobf = unobfuscated behind code condensing tricks, all code is written normally (and undonuted (i.e. much more legible)). 
- emb = embellished to add extra background animations
- new = doesnt require math library to compile (i.e. the -lm flag)
- og = the original donut code (requires -lm flag for compiling)

## Running and Compiling

### Variants
Uncompiled code is in the 'variants' folder. To compile use the command:
> gcc -o donut donut.c -lm

### bin
All pre-compiled binaries are in the bin folder. To run: 
> ./donut

### Browser
To run the in-browser version cd to the 'browser' folder and run:
> python -m http.server 80
then open up your browser and type 'localhost' into the url bar.


# Credit
All credit goes to A1kon for creation:
- https://www.a1k0n.net/2011/07/20/donut-math.html
- https://www.a1k0n.net/2021/01/13/optimizing-donut.html
