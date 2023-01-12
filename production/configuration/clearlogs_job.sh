(
    logfolder='/home/logs'
    filesize=`du $logfolder --max-depth=0 --block-size=1M | awk '{print $1}'`

    if [ $filesize -gt 10 ]
    then
        for filename in `ls $logfolder`
        do
            > $logfolder/$filename
        done
    fi

    TZ=":Asia/Kolkata" date >> /home/logs/logs_rotation.log
    echo 'rotating logs finished' >> /home/logs/logs_rotation.log
) || (
    TZ=":Asia/Kolkata" date >> /home/logs/logs_rotation.log
    echo 'error in rotating logs' >> /home/logs/logs_rotation.log
)
echo '--------------------------------------------' >> /home/logs/logs_rotation.log
echo '' >> /home/logs/logs_rotation.log
