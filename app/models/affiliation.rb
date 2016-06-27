class Affiliation < ActiveRecord::Base
  belongs_to :artist
  belongs_to :affiliate, class_name: 'Artist'
end
