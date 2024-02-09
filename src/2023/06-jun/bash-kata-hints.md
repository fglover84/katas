# Bash Kata

## 21st June 2023

Google will be your friend in this kata, but as a starting place here are some command line tool suggestions that should help for each part of the script:

Create a script that:

1. Is executable (chmod)
2. Downloads an RSS file from the podcasts endpoint (curl)
3. Checks that the file starts with `<rss>` (head/cat, grep)
4. Prints out the title of the podcast (grep, tr, cut, sed?)
5. Prints out how many episodes the podcast has (grep)
6. Prints out how many episodes are explicit (grep)
7. Outputs a file with the information printed out above in a directory called /output (make the directory using the command line) (mkdir, redirection >)
