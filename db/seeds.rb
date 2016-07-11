# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
data = JSON.parse(File.read("db/data.json"))


Artist.destroy_all
Collaboration.destroy_all
Artist.create!(data)

car = Artist.find_by(name: 'Mr. Carmack')
falc = Artist.find_by(name: 'Falcons')
gold = Artist.find_by(name: 'Goldlink')
diplo = Artist.find_by(name: 'Diplo')
skril = Artist.find_by(name: 'Skrillex')
ferg = Artist.find_by(name: 'ASAP Ferg')
drake = Artist.find_by(name: 'Drake')
chainz = Artist.find_by(name: '2 Chainz')
kanye = Artist.find_by(name: 'Kanye West')
jeezy = Artist.find_by(name: 'Jeezy')
gj = Artist.find_by(name: 'Gent & Jawns')
future = Artist.find_by(name: 'Future')
calvin = Artist.find_by(name: 'Calvin Harris')
rih = Artist.find_by(name: 'Rihanna')
flume = Artist.find_by(name: 'Flume')
tove = Artist.find_by(name: 'Tove Lo')

rih.collaborators << [calvin, drake, kanye]
flume.collaborators << [tove]

falc.collaborators << [gold, car]

ferg.collaborators << [future]

skril.collaborators << [diplo, ferg]

diplo.collaborators << [gj, chainz]

chainz.collaborators << [jeezy, kanye, drake]

drake.collaborators << [jeezy, kanye, future]
