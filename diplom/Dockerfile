FROM python:3.12

WORKDIR /app

COPY database/ /app/database/
COPY mail/ /app/mail/
COPY security/ /app/security/
COPY uploads/ /app/uploads/

COPY create_db.py main.py requirements.txt .env mail.env security.env ./
EXPOSE 8000

RUN pip install --no-cache-dir -r requirements.txt

CMD python create_db.py && python main.py