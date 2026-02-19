# main.py/connectors/postgres_connector.py
from sqlalchemy.ext.asyncio import AsyncSession
from base_connector import get_db

# This is a placeholder if you want Postgres-specific helpers
# e.g., async query execution
async def execute_query(db: AsyncSession, query: str):
    result = await db.execute(query)
    return result.fetchall()