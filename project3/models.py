from .app import db


class usa(db.Model):
    __tablename__ = db.Model.metadata.tables['usatesting']

    def __repr__(self):
        return '<usa %r>' % (self.name)
