import sqlite3
from app import dbhelper  # noqa

def get_order(conn, oid):
    # vulnerable: string-formatted SQL
    cur = conn.cursor()
    cur.execute("SELECT * FROM orders WHERE id = %s" % oid)
    return cur.fetchall()
