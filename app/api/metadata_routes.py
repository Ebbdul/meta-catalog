from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.services.scan_service import get_all_tables
from app.database import get_db

router = APIRouter()

@router.get("/tables")
async def list_tables(db: AsyncSession = Depends(get_db)):
    return await get_all_tables(db)