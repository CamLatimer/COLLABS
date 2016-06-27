# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
data = JSON.parse(File.read("db/data.json"))


Artist.destroy_all
Affiliation.destroy_all
Artist.create!(data)

car = Artist.find_by(name: 'Mr. Carmack')
falc = Artist.find_by(name: 'Falcons')
gold = Artist.find_by(name: 'Goldlink')
diplo = Artist.find_by(name: 'Diplo')
skril = Artist.find_by(name: 'Skrillex')
zhu = Artist.find_by(name: 'ZHU')
ferg = Artist.find_by(name: 'ASAP Ferg')
drake = Artist.find_by(name: 'Drake')
chainz = Artist.find_by(name: '2 Chainz')
kanye = Artist.find_by(name: 'Kanye West')
jeezy = Artist.find_by(name: 'Jeezy')
gj = Artist.find_by(name: 'Gent & Jawns')
future = Artist.find_by(name: 'Future')
calvin = Artist.find_by(name: 'Calvin Harris')
rih = Artist.find_by(name: 'Rihanna')

falc.affiliates << [gold, car]

ferg.affiliates << [future]

skril.affiliates << [diplo, ferg, zhu]

diplo.affiliates << [gj, chainz]

chainz.affiliates << [jeezy, kanye, drake]

drake.affiliates << [jeezy, kanye, future]
