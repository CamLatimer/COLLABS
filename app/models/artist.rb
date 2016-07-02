class Artist < ActiveRecord::Base
  has_many :collaborations
  has_many :collaborators, through: :collaborations,
                        dependent: :destroy

  def self.search(search)
    where("name ILIKE ?", "%#{search}%")
  end
end
