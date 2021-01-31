class Admin::PostsController < Admin::BaseController
  def index
    respond_to do |format|
      format.html
      format.json do
        render json: {
          posts: Post.last(2),
          status: "success"
        }
      end
    end
  end
end
