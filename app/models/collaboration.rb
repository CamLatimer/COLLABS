class Collaboration < ActiveRecord::Base
  belongs_to :artist
  belongs_to :collaborator, class_name: 'Artist'

  after_create :create_inverse, unless: :has_inverse?
  after_destroy :destroy_inverses, if: :has_inverse?

  def create_inverse
    self.class.create(inverse_collaboration_options)
  end

  def destroy_inverses
    inverses.destroy_all
  end

  def has_inverse?
    self.class.exists?(inverse_collaboration_options)
  end

  def inverses
    self.class.where(inverse_collaboration_options)
  end

  def inverse_collaboration_options
    {collaborator_id: artist_id, artist_id: collaborator_id}
  end
end
