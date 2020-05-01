require(rmarkdown)
system("git status")
system('git config --global user.email "cecabrera55@gmail.com"')
system('git config --global user.name "Camilo"')
system("git add * ")
system(sprintf('git commit -m "Actualiación del %s"', Sys.time()))
# system("git pull")
# system('git push origin master')

