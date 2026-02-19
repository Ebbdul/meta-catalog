from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    POSTGRES_URL: str
    REDIS_URL: str
    CELERY_BROKER_URL: str
    CELERY_RESULT_BACKEND: str
    HOST: str = "0.0.0.0"
    PORT: int = 8000

    class Config:
        env_file = ".env.local"
        env_file_encoding = 'utf-8'
        extra = "ignore"  # This handles the "Extra inputs" error you had before

settings = Settings()