# Bash Kata

## 21st June 2023

The Editorial team at the BBC want to do an audit on their Podcast RSS feeds. They want to find out:

- how many episodes each podcast has
- how many of those episodes are explicit

Given a collection of podcast PIDs, find out information about the files using bash.

PIDs: b006qt55, p0f09p9z, p0df1893

Create a script that:

1. Is executable
2. Downloads an RSS file from the podcasts endpoint (`https://podcasts.files.bbci.co.uk/<INSERT_PID>.rss`)
3. Checks that the file starts with the `<?xml` and check it ends with `</rss>`
4. Prints out the title of the podcast
5. Prints out how many episodes the podcast has (each episode is denoted by an `<item>` tag)
6. Prints out how many episosdes are explicit (explicit episodes have the following tag: `<itunes:explicit>yes</itunes:explicit>`)
7. Outputs a file with the information above, in a directory called /output

Hardcoding is allowed!

Additional tasks if you have extra time, choose one or more that interests you and your team:

- Get the script to take a PID as input
- It's been discovered that there's incorrect data and that all the podcast in <this podcast> have strong language, when they are marked as being clean. Write a command to convert all of the explicit ratings in the RSS feed.
- Reduce the lines of the script to as few as possible with the same outcomes
