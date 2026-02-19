# main.py/connectors/base_connector.py
from config import AsyncSessionLocal

async def get_db():
    async with AsyncSessionLocal() as session:
        yield session