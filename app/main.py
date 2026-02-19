# app/main.py
from fastapi import FastAPI
from app.config import settings
from app.api import metadata_routes, profiling_routes, dq_routes

app = FastAPI(title="Meta Catalog API")


app.include_router(metadata_routes.router, prefix="/api/metadata", tags=["Metadata"])
app.include_router(profiling_routes.router, prefix="/api/profiling", tags=["Profiling"])
app.include_router(dq_routes.router, prefix="/api/dq", tags=["Data Quality"])

# Health check endpoint
@app.get("/ping")
def ping():
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host=settings.HOST, port=settings.PORT, reload=True)