from sqlalchemy.ext.asyncio import AsyncSession

async def get_all_tables(db: AsyncSession):
    result = await db.execute("SELECT table_name FROM information_schema.tables WHERE table_schema='public'")
    tables = [row[0] for row in result.fetchall()]
    return {"tables": tables}