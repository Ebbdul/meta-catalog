from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.services.profiling_service import profile_table
from app.database import get_db

router = APIRouter()

@router.get("/profile/{table_name}")
async def profile(table_name: str, db: AsyncSession = Depends(get_db)):
    return await profile_table(db, table_name)