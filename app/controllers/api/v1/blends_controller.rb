module Api::V1
  class BlendsController < ApplicationController
    before_action :set_blend, only: [:show, :update, :destroy]

    # GET /blends
    def index
      @blends = Blend.all

      render :json => @blends, :include => :blend_items
    end

    # GET /blends/1
    def show
      render json: @blend
    end

    # POST /blends
    def create
      print blend_params
      print params[:oils][:oils]
      @blend = Blend.new(blend_params)
      @blenditems = []
      oils = params[:oils][:oils]
      for oil in oils
        @new_oil = Oil.find_by(name: oil)
        @blend_item = BlendItem.new()
        @blend_item.oil = @new_oil
        @blend_item.blend = @blend
        if @blend_item.save
          @blenditems.push(@blend_item)
        end
      end

      if @blend.save
        render :json => @blend, :include => :blend_items
      else
        render json: @blend.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /blends/1
    def update
      if @blend.update(blend_params)
        render json: @blend
      else
        render json: @blend.errors, status: :unprocessable_entity
      end
    end

    # DELETE /blends/1
    def destroy
      @blend.destroy
      if @blend.destroy
        head :no_content, status: :ok
      else
        render json: @blend.errors, status: :unprocessable_entity
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_blend
        @blend = Blend.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def blend_params
        params.require(:blend).permit(:name, :use_case)
        # params[:oil].permit(:oils)
      end
  end
end
