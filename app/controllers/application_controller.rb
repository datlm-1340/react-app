class ApplicationController < ActionController::Base
  include Internationalization

  before_action :set_default_locale
end
