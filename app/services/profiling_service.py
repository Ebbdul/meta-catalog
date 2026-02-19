from sqlalchemy.ext.asyncio import AsyncSession

async def profile_table(db: AsyncSession, table_name: str):
    # Example: count rows
    result = await db.execute(f"SELECT COUNT(*) FROM {table_name}")
    count = result.scalar()
    return {"table": table_name, "rows": count}