from django.contrib.auth import get_user_model
from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template

from configs.celery import app
from core.dataclasses.user_dataclass import UserDataClass

UserModel = get_user_model()


class EmailService:
    @staticmethod
    @app.task
    def __send_email(to: str, template_name: str, context: dict, subject='') -> None:
        template = get_template(template_name)
        html_content = template.render(context)
        msg = EmailMultiAlternatives(subject, from_email='ostap.yurchuk.ki.2020@lpnu.ua', to=[to])
        msg.attach_alternative(html_content, 'text/html')
        msg.send()

    @classmethod
    def register(cls, user: UserDataClass):
        cls.__send_email.delay(
            user.email,
            'register.html',
            {'name': user.profile.name},
            'Register'
        )

    @classmethod
    def make_order(cls, user: UserDataClass, order_id):
        cls.__send_email.delay(
            user.email,
            'make_order.html',
            {
                'name': user.profile.name,
                'order_id': order_id
            },
            'Order'
        )

    @staticmethod
    @app.task
    def spam():
        for user in UserModel.objects.all():
            user: UserDataClass = user
            EmailService.__send_email(user.email, 'spam.html', {}, 'Spam')
