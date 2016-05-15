class AlbumsController < ApplicationController
  before_action :set_album, only: [:show, :update, :destroy]

  # GET /albums
  def index
    @albums = Album.all
    render json: @albums, include: [:photos]
  end

  def search
    query = params[:q]
    collected = []
    if params[:q]
      tags = Tag.where("name LIKE ?", "%#{query}%")
      tags.each do |tag|
        albums = tag.albums
        if albums.count > 0
          tag.albums.each do |album|
            collected.push(album)
          end
        end
      end
    end
    render json: collected, include: [:photos]
  end

  # GET /albums/1
  def show
    render json: @album, include: [:tags, :photos]
  end

  # POST /albums
  def create
    @album = Album.new(album_params)

    if @album.save
      save_photos
      render json: @album, status: :created, location: @album
    else
      render json: @album.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /albums/1
  def update
    if @album.update(album_params)
      render json: @album
    else
      render json: @album.errors, status: :unprocessable_entity
    end
  end

  # DELETE /albums/1
  def destroy
    @album.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_album
      @album = Album.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def album_params
      params.require(:album).permit(:name, :description, :user_id)
    end

    # save photos
    def save_photos
      # binding.pry
      image_urls = params["photos"]
      image_urls.each do |url|
        @album.photos.create(url: url)
      end
    end
end
