class Artist < ActiveRecord::Base
  has_many :affiliations
  has_many :affiliates, through: :affiliations,
                        dependent: :destroy

  def self.search(search)
    where("name ILIKE ?", "%#{search}%")
  end
end
