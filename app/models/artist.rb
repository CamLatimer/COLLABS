class Artist < ActiveRecord::Base
  has_many :affiliations
  has_many :affiliates, through: :affiliations
end
