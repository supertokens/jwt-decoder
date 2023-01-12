FROM node:18-alpine

WORKDIR /home

RUN mkdir app

RUN mkdir logs

ADD ./configuration/clearlogs_job.sh /clearlogs_job.sh

RUN chmod 0655 /clearlogs_job.sh

ADD ./configuration/cronjobs.sh /etc/cron.d/cronjobs.sh

RUN chmod 0655 /etc/cron.d/cronjobs.sh

EXPOSE 3000

CMD ["sh", "-c", "crontab /etc/cron.d/cronjobs.sh && crond && cd app/ && npm install && npm run build && npm run dev"]
